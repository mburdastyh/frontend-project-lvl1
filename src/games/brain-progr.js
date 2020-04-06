import {
  getRandomInt, maxNumberForGames, runGame,
} from '../index.js';

const progressionLength = 10;

const getProgression = (firstValue, stepOfProgression, length) => {
  const result = [];
  let currentValue = firstValue;
  for (let i = 0; i < length; i += 1) {
    result.push(currentValue);
    currentValue += stepOfProgression;
  }
  return result;
};

const initData = () => {
  const progression = getProgression(
    getRandomInt(maxNumberForGames),
    getRandomInt(maxNumberForGames),
    progressionLength,
  );
  const imaginedIndex = getRandomInt(progressionLength) - 1;
  const imaginedNumber = progression[imaginedIndex];

  return {
    progression,
    imaginedIndex,
    imaginedNumber,
  };
};

const askQuestion = (value) => {
  const imagedProgression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    imagedProgression.push(String(value.progression[i]));
  }
  imagedProgression[value.imaginedIndex] = '..';

  console.log(`Question: ${imagedProgression.join(' ')}`);
};

const getProperAnswer = (value) => value.imaginedNumber;

const progrGame = () => {
  const rules = 'What number is missing in the progression?';

  runGame(rules, initData, askQuestion, getProperAnswer);
};

export default progrGame;
