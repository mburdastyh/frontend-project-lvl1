import { getRandomInt, maxNumberForGames } from '../utils.js';
import runGame from '../index.js';

const getGcd = (value1, value2) => {
  if (value2 === 0) {
    return Math.abs(value1);
  }

  return getGcd(value2, value1 % value2);
};

const initData = () => {
  const randomNumber1 = getRandomInt(maxNumberForGames);
  const randomNumber2 = getRandomInt(maxNumberForGames);

  return {
    question: `${randomNumber1} ${randomNumber2}`,
    answer: String(getGcd(randomNumber1, randomNumber2)),
  };
};

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  runGame(rules, initData);
};

export default gcdGame;
