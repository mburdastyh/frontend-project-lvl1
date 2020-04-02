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

const progrGame = (name) => {
  const initData = () => {
    const progression = getProgression(
      getRandomInt(maxNumberForGames),
      getRandomInt(maxNumberForGames),
      progressionLength,
    );
    const imaginedIndex = getRandomInt(progressionLength) - 1;
    const imaginedNumber = progression[imaginedIndex];

    return {
      progr: progression,
      i: imaginedIndex,
      n: imaginedNumber,
    };
  };

  const askQuestion = (value) => {
    const imagedProgression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      imagedProgression.push(String(value.progr[i]));
    }
    imagedProgression[value.i] = '..';

    console.log(`Question: ${imagedProgression.join(' ')}`);
  };

  const getProperAnswer = (value) => value.n;

  runGame(initData, askQuestion, getProperAnswer, name);
};

export default progrGame;
