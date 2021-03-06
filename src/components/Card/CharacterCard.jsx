import React from 'react';
import { useFetch } from '../../hooks';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import Spinner from '../Spinner/Spinner';
import './CharacterCard.css';

function CharacterCard({ characterUrl }) {
   const { data: character, isLoading, error } = useFetch(characterUrl);

   if (isLoading)
      return (
         <div className='card character-card loading'>
            <Spinner />
         </div>
      );

   if (error)
      return (
         <div className='card character-card error'>
            <h3 className='error'>Something went wrong!</h3>
         </div>
      );

   return (
      <div className='card character-card'>
         {character && (
            <>
               <figure className='card-img character-card-img'>
                  <img src={character.image} alt={character.name} />
               </figure>
               <div className='card-content'>
                  <h2 className='card-title character-card-title'>
                     {character.name}
                  </h2>
                  <hr className='card-hr' />
                  <div className='card-body card-character-body'>
                     <CharacterInfo characterData={character} />
                  </div>
               </div>
            </>
         )}
      </div>
   );
}

export default CharacterCard;
