import {
  getRandomInt, maxNumberForGames, runGame,
} from '../index.js';

const getGcd = (value1, value2) => {
  if (value2 === 0) {
    return Math.abs(value1);
  }

  return getGcd(value2, value1 % value2);
};

const initData = () => {
  const value = {
    n1: getRandomInt(maxNumberForGames),
    n2: getRandomInt(maxNumberForGames),
  };

  return value;
};

const askQuestion = (value) => {
  console.log(`Question: ${value.n1} ${value.n2}`);
};

const getProperAnswer = (value) => getGcd(value.n1, value.n2);

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  runGame(rules, initData, askQuestion, getProperAnswer);
};

export default gcdGame;
