import { getRandomInt, maxNumberForGames, minNumberForGames } from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (value1, value2) => {
  if (value2 === 0) {
    return Math.abs(value1);
  }

  return getGcd(value2, value1 % value2);
};

const initData = () => {
  const randomNumber1 = getRandomInt(minNumberForGames, maxNumberForGames);
  const randomNumber2 = getRandomInt(minNumberForGames, maxNumberForGames);

  return {
    question: `${randomNumber1} ${randomNumber2}`,
    answer: String(getGcd(randomNumber1, randomNumber2)),
  };
};

const gcdGame = () => {
  runGame(description, initData);
};

export default gcdGame;
