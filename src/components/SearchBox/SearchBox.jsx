import React, { useEffect, useRef, useState } from 'react';
import { getLocationUrl } from '../../utils';
import LocationSuggestions from '../LocationSuggestions/LocationSuggestions';
import SelectInput from '../SelectInput/SelectInput';
import './SearchBox.css';

const selectOptions = ['Id', 'Name'];

function SearchBox({ handleChangeUrl }) {
   const [searchBy, setSearchBy] = useState(selectOptions[0]);
   const [search, setSearch] = useState('');
   const [isVisible, setIsVisible] = useState(false);
   const searchInput = useRef();
   const searchBoxRef = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (searchBy === selectOptions[0])
         handleChangeUrl(getLocationUrl({ id: search }));
      searchInput.current.blur();
   };
   const handleOnSelect = (e) => {
      setSearchBy(e.target.textContent);
      setSearch('');
   };
   const handleOnChange = (e) => {
      if (searchBy !== selectOptions[0] && e.target.value) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
      setSearch(e.target.value);
   };
   const handleSuggestionsVisibility = () => setIsVisible(!isVisible);
   const handleFocus = () => {
      setSearch('');
      if (isVisible) setIsVisible(false);
   };

   useEffect(() => {
      const handleOnBlurSuggestions = (e) => {
         if (
            isVisible &&
            e.target.closest('.search-box') !== searchBoxRef.current
         ) {
            setIsVisible(false);
         }
      };

      document.addEventListener('mousedown', handleOnBlurSuggestions);

      return () =>
         document.removeEventListener('mousedown', handleOnBlurSuggestions);
   }, [isVisible]);

   return (
      <div ref={searchBoxRef} className='search-box'>
         <form
            className={`search-box-form 
            ${isVisible ? 'suggestions-active' : ''}`}
            onSubmit={handleSubmit}
         >
            <div className='form-control'>
               <SelectInput
                  value={searchBy}
                  handleOnSelect={handleOnSelect}
                  options={selectOptions}
               />
               <input
                  ref={searchInput}
                  type={searchBy === selectOptions[0] ? 'number' : 'text'}
                  value={search}
                  onChange={handleOnChange}
                  onFocus={handleFocus}
               />
               <button type='submit'>
                  <i className='fa-solid fa-magnifying-glass'></i>
               </button>
            </div>
         </form>
         {isVisible && (
            <LocationSuggestions
               name={search}
               handleChangeUrl={handleChangeUrl}
               handleSuggestionsVisibility={handleSuggestionsVisibility}
            />
         )}
      </div>
   );
}

export default SearchBox;
