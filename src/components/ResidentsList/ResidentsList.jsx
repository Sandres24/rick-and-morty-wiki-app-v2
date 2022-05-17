import React, { useEffect, useState } from 'react';
import { paginationOffSet } from '../../utils';
import CharacterCard from '../Card/CharacterCard';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';
import './ResidentsList.css';

const initialPagination = { page: 1, offSet: 0, elementsPerPage: 10 };

function ResidentsList({ url, location, isLoading, error }) {
   const [pagination, setPagination] = useState({
      page: 1,
      offSet: 0,
      elementsPerPage: 10,
   });

   const handlePagination = (page) => {
      window.scrollTo(0, 0);
      setPagination((prevPagination) => ({
         page,
         offSet: paginationOffSet({
            page,
            elementsPerPage: prevPagination.elementsPerPage,
         }),
         elementsPerPage: prevPagination.elementsPerPage,
      }));
   };

   useEffect(() => {
      setPagination(initialPagination);
   }, [url]);

   if (isLoading)
      return (
         <section className='info-section residents-list loading'>
            <h2 className='residents-list-title'>Residents</h2>
            <hr className='residents-list-hr' />
            <Spinner />
         </section>
      );

   if (error)
      return (
         <section className='info-section residents-list error'>
            <h2 className='residents-list-title'>Residents</h2>
            <hr className='residents-list-hr' />
            <h3 className='error'>Something went wrong!</h3>
         </section>
      );

   return (
      <section className='info-section residents-list'>
         <h2 className='residents-list-title'>Residents</h2>
         <hr className='residents-list-hr' />
         {location && (
            <>
               {location.residents.length > 0 ? (
                  <div className='residents-list-wrapper'>
                     {location.residents
                        .slice(
                           pagination.offSet,
                           pagination.offSet + pagination.elementsPerPage
                        )
                        .map((resident) => (
                           <CharacterCard
                              key={resident}
                              characterUrl={resident}
                           />
                        ))}
                  </div>
               ) : (
                  <p className='list-empty'>There are no residents to list!</p>
               )}
            </>
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
