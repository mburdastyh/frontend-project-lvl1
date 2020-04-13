import { getRandomInt, maxNumberForGames } from '../utils.js';
import runGame from '../index.js';

const initData = () => {
  const randomNumber = getRandomInt(maxNumberForGames);

  return {
    question: randomNumber,
    answer: randomNumber % 2 === 0 ? 'yes' : 'no',
  };
};

const evenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(rules, initData);
};

export default evenGame;
