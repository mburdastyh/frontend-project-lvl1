import {
  getRandomInt, maxNumberForGames, runGame,
} from '../index.js';

const checkIsPrime = (num) => {
  if (num < 3) {
    return 'yes';
  }

  let det = 1;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      det = i;
    }
  }

  return (det === 1) ? 'yes' : 'no';
};

const primeGame = (name) => {
  const initData = () => getRandomInt(maxNumberForGames);

  const askQuestion = (value) => {
    console.log(`Question: ${value}`);
  };

  const getProperAnswer = (value) => checkIsPrime(value);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  runGame(initData, askQuestion, getProperAnswer, name);
};

export default primeGame;
