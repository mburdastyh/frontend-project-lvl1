import {
  getRandomInt, maxNumberForGames, runGame,
} from '../index.js';

const evenGame = (name) => {
  const initData = () => getRandomInt(maxNumberForGames);

  const askQuestion = (value) => {
    console.log(`Question: ${value}`);
  };

  const getProperAnswer = (value) => ((value % 2 === 0) ? 'yes' : 'no');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  runGame(initData, askQuestion, getProperAnswer, name);
};

export default evenGame;
