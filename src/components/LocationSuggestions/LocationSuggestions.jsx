import React from 'react';
import { useFetch } from '../../hooks';
import { getLocationUrl } from '../../utils';
import './LocationSuggestions.css';

function LocationSuggestions({
   name,
   handleChangeUrl,
   handleSuggestionsVisibility,
}) {
   const {
      data: searchResult,
      isLoading,
      error,
   } = useFetch(getLocationUrl({ name }));

   const handleClick = (result) => {
      handleChangeUrl(getLocationUrl({ id: result.id }));
      handleSuggestionsVisibility();
   };

   if (isLoading)
      return (
         <ul className='location-suggestions'>
            <hr className='location-suggestions-hr' />
            <h2>Loading...</h2>
         </ul>
      );

   if (error)
      return (
         <ul className='location-suggestions'>
            <hr className='location-suggestions-hr' />
            <h2>Error...</h2>
         </ul>
      );

   return (
      <ul className='location-suggestions'>
         <hr className='location-suggestions-hr' />
         {searchResult &&
            searchResult.results.map((result) => (
               <li
                  key={result.id}
                  className='location-suggestions-item'
                  onClick={() => handleClick(result)}
               >
                  {result.name}
               </li>
            ))}
      </ul>
   );
}

export default LocationSuggestions;
