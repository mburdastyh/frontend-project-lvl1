export const maxNumberForGames = 100;
export const minNumberForGames = 1;

export const getRandomInt = (start, end) => {
  const randomFloat = start + Math.random() * (end + 1 - start);

  return Math.floor(randomFloat);
};
