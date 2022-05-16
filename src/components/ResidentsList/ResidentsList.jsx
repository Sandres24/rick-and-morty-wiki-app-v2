import React, { useEffect, useState } from 'react';
import { paginationOffSet } from '../../utils';
import CharacterCard from '../Card/CharacterCard';
import Pagination from '../Pagination/Pagination';
import './ResidentsList.css';

const initialPagination = { page: 1, offSet: 0, elementsPerPage: 10 };

function ResidentsList({ url, location, isLoading, error }) {
   const [pagination, setPagination] = useState(initialPagination);

   const handlePagination = (page) => {
      setPagination((prevPagination) => ({
         ...prevPagination,
         page,
         offSet: paginationOffSet({
            page,
            elementsPerPage: prevPagination.elementsPerPage,
         }),
      }));
      window.scrollTo(0, 0);
   };

   useEffect(() => {
      setPagination(initialPagination);
   }, [url]);

   if (isLoading)
      return (
         <section className='info-section residents-list'>
            <h2 className='residents-list-title'>Residents</h2>
            <hr className='residents-list-hr' />

            <h2>Loading...</h2>
         </section>
      );

   if (error)
      return (
         <section className='info-section residents-list'>
            <h2 className='residents-list-title'>Residents</h2>
            <hr className='residents-list-hr' />

            <h2>Error...</h2>
         </section>
      );

   return (
      <section className='info-section residents-list'>
         <h2 className='residents-list-title'>Residents</h2>
         <hr className='residents-list-hr' />
         {location && (
            <div className='residents-list-wrapper'>
               {location.residents
                  .slice(
                     pagination.offSet,
                     pagination.offSet + pagination.elementsPerPage
                  )
                  .map((resident) => (
                     <CharacterCard key={resident} characterUrl={resident} />
                  ))}
            </div>
         )}
         {location && (
            <Pagination
               pagination={pagination}
               totalElements={location.residents.length}
               handlePagination={handlePagination}
            />
         )}
      </section>
   );
}

export default ResidentsList;
