import { getRandomInt, maxNumberForGames } from '../utils.js';
import runGame from '../index.js';

const progressionLength = 10;

const getProgression = (start, diff, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + diff * i);
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

  const imagedPression = progression.map((num, i) => (i === imaginedIndex ? '..' : num));

  return {
    question: imagedPression.join(' '),
    answer: String(imaginedNumber),
  };
};

const progrGame = () => {
  const rules = 'What number is missing in the progression?';

  runGame(rules, initData);
};

export default progrGame;
