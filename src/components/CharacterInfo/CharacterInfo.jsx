import React from 'react';
import { statusCharacter } from '../../utils';
import './CharacterInfo.css';

function CharacterInfo({ characterData }) {
   return (
      <>
         <div className='character-status'>
            <div
               className='status-icon'
               style={{
                  background: statusCharacter({ status: characterData.status }),
               }}
            ></div>
            <h4 className='status'>{characterData.status}</h4>
         </div>
         <div className='character-info character-species'>
            <h4 className='character-subtitle character-species-subtitle'>
               Species
            </h4>
            <p className='character-text character-species-text'>
               {characterData.species} - {characterData.type}
            </p>
         </div>
         <div className='character-info character-origin'>
            <h4 className='character-subtitle character-origin-subtitle'>
               Origin
            </h4>
            <p className='character-text character-origin-text'>
               {characterData.origin.name}
            </p>
         </div>
         <div className='character-info character-appearances'>
            <h4 className='character-subtitle character-appearances-subtitle'>
               # Appearances
            </h4>
            <p className='character-text character-appearances-text'>
               {characterData.episode.length}
            </p>
         </div>
      </>
   );
}

export default CharacterInfo;
