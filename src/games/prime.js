import { getRandomInt, maxNumberForGames } from '../utils.js';
import runGame from '../index.js';

const checkIsPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const initData = () => {
  const randomNumber = getRandomInt(maxNumberForGames);

  return {
    question: `${randomNumber}`,
    answer: checkIsPrime(randomNumber) ? 'yes' : 'no',
  };
};

const primeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runGame(rules, initData);
};

export default primeGame;
