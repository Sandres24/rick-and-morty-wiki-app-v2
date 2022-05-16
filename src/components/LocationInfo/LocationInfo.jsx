import React from 'react';
import './LocationInfo.css';

function LocationInfo({ location, isLoading, error }) {
   if (isLoading)
      return (
         <section className='info-section location-info'>
            <h2>Loading...</h2>
         </section>
      );

   if (error)
      return (
         <section className='info-section location-info'>
            <h2>Error...</h2>
         </section>
      );

   return (
      <section className='info-section location-info'>
         {location && (
            <>
               <h3 className='location-info-title'>{location.name}</h3>
               <div className='location-description'>
                  <div className='location location-type'>
                     <h4 className='location-subtitle location-type-subtitle'>
                        Type:{' '}
                     </h4>
                     <p className='location-text location-type-text'>
                        {location.type}
                     </p>
                  </div>
                  <div className='location location-dimension'>
                     <h4 className='location-subtitle location-dimension-subtitle'>
                        Dimension:{' '}
                     </h4>
                     <p className='location-text location-dimension-text'>
                        {location.dimension}
                     </p>
                  </div>
                  <div className='location location-population'>
                     <h4 className='location-subtitle location-population-subtitle'>
                        Population:{' '}
                     </h4>
                     <p className='location-text location-population-text'>
                        {location.residents.length}
                     </p>
                  </div>
               </div>
            </>
         )}
      </section>
   );
}

export default LocationInfo;
