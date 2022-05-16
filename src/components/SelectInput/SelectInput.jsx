import React, { useEffect, useRef, useState } from 'react';
import Option from './Option';
import './SelectInput.css';

function SelectInput({ value, handleOnSelect, options }) {
   const [showOptions, setShowOptions] = useState(false);
   const selectInputRef = useRef();

   const handleShowOptions = () => setShowOptions(!showOptions);

   useEffect(() => {
      const handleOnBlurSelectInput = (e) => {
         if (
            showOptions &&
            e.target.closest('.select-input') !== selectInputRef.current
         )
            setShowOptions(false);
      };

      document.addEventListener('mousedown', handleOnBlurSelectInput);

      return () =>
         document.removeEventListener('mousedown', handleOnBlurSelectInput);
   }, [showOptions]);

   return (
      <div
         ref={selectInputRef}
         className={`select-input ${showOptions ? 'options-active' : ''}`}
         onClick={handleShowOptions}
      >
         <div className='select-input-text'>
            {value}
            <i className='fa-solid fa-angle-down'></i>
         </div>
         {showOptions && <hr className='select-input-hr' />}
         <div
            className={`select-input-options ${
               showOptions ? 'options-active' : ''
            }`}
         >
            {options.map((optionValue) => (
               <Option
                  key={optionValue}
                  optionValue={optionValue}
                  handleOnSelect={handleOnSelect}
               />
            ))}
         </div>
      </div>
   );
}

export default SelectInput;
