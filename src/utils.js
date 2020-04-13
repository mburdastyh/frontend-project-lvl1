export const maxNumberForGames = 100;

export const getRandomInt = (num) => {
  const max = Math.floor(num) + 1;

  return Math.floor(Math.random() * (max - 1)) + 1;
};
