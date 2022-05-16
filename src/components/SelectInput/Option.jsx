import React from 'react';

function Option({ optionValue, handleOnSelect }) {
   return (
      <div className='option' onClick={handleOnSelect}>
         {optionValue}
      </div>
   );
}

export default Option;
