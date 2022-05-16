export const statusCharacter = ({ status }) => {
   if (status === 'Alive') return 'green';
   if (status === 'Dead') return 'red';
   return '#938686';
};
