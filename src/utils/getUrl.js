export const getLocationUrl = ({ id, name }) => {
   if (name) return `https://rickandmortyapi.com/api/location?name=${name}`;
   if (id) return `https://rickandmortyapi.com/api/location/${id}`;
   return null;
};
