import { getRandomInt, maxNumberForGames, minNumberForGames } from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const randomNumber = getRandomInt(minNumberForGames, maxNumberForGames);

  return {
    question: String(randomNumber),
    answer: checkIsPrime(randomNumber) ? 'yes' : 'no',
  };
};

const primeGame = () => {
  runGame(description, initData);
};

export default primeGame;
