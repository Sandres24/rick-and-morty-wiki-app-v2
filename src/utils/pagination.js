export const paginationOffSet = ({ page, elementsPerPage }) => {
   const offSet = page * elementsPerPage - elementsPerPage;
   return offSet;
};

export const paginationRange = ({
   range,
   page,
   elementsPerPage,
   totalElements,
}) => {
   const totalPages = Math.ceil(totalElements / elementsPerPage);
   const gap = Math.floor(range / 2);

   if (range > totalPages)
      return Array.from(Array(totalPages).keys(), (index) => {
         return index + 1;
      });

   if (page > gap + 1 && totalPages >= page + gap)
      return Array.from(Array(range).keys(), (index) => {
         return index + page - gap;
      });

   if (page > gap + 1 && totalPages < page + gap)
      return Array.from(Array(range).keys(), (index) => {
         return totalPages - range + 1 + index;
      });

   return Array.from(Array(range).keys(), (index) => {
      return index + 1;
   });
};
