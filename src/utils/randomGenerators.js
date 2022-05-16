export const getRandomNumber = ({ limit }) => {
   if (limit) return Math.floor(Math.random() * limit + 1);
   return null;
};
