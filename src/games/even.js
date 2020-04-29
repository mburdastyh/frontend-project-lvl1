import { getRandomInt, maxNumberForGames, minNumberForGames } from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateData = () => {
  const randomNumber = getRandomInt(minNumberForGames, maxNumberForGames);

  return {
    question: randomNumber,
    answer: randomNumber % 2 === 0 ? 'yes' : 'no',
  };
};

const evenGame = () => {
  runGame(description, generateData);
};

export default evenGame;
