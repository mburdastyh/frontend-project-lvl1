import {
  getRandomInt, maxNumberForGames, runGame,
} from '../index.js';

const checkIsPrime = (num) => {
  if (num < 3) {
    return true;
  }

  let det = 1;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      det = i;
    }
  }

  return det === 1;
};

const initData = () => getRandomInt(maxNumberForGames);

const askQuestion = (value) => {
  console.log(`Question: ${value}`);
};

const getProperAnswer = (value) => (checkIsPrime(value) ? 'yes' : 'no');

const primeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runGame(rules, initData, askQuestion, getProperAnswer);
};

export default primeGame;
