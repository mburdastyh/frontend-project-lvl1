import {
  getRandomInt, maxNumberForGames, runGame,
} from '../index.js';

const initData = () => getRandomInt(maxNumberForGames);

const askQuestion = (value) => {
  console.log(`Question: ${value}`);
};

const getProperAnswer = (value) => ((value % 2 === 0) ? 'yes' : 'no');

const evenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(rules, initData, askQuestion, getProperAnswer);
};

export default evenGame;
