import React from 'react';
import { paginationRange } from '../../utils';
import './Pagination.css';

function Pagination({ pagination, totalElements, handlePagination }) {
   const range = paginationRange({
      range: 7,
      page: pagination.page,
      elementsPerPage: pagination.elementsPerPage,
      totalElements,
   });

   return (
      <section className='pagination'>
         {pagination.page > 1 && (
            <button
               className='btn btn-pagination btn-navigate-pagination'
               onClick={() => handlePagination(pagination.page - 1)}
            >
               <i className='fa-solid fa-angle-left'></i>
            </button>
         )}
         {range.length > 1 &&
            range.map((page) => (
               <button
                  key={page}
                  className='btn btn-pagination'
                  onClick={() => handlePagination(page)}
                  disabled={pagination.page === page}
               >
                  {page}
               </button>
            ))}
         {pagination.page < totalElements / pagination.elementsPerPage && (
            <button
               className='btn btn-pagination btn-navigate-pagination'
               onClick={() => handlePagination(pagination.page + 1)}
            >
               <i className='fa-solid fa-angle-right'></i>
            </button>
         )}
      </section>
   );
}

export default Pagination;
