import { getRandomInt, maxNumberForGames, minNumberForGames } from '../utils.js';
import runGame from '../index.js';

const progressionLength = 10;
const description = 'What number is missing in the progression?';

const getProgression = (start, diff, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + diff * i);
  }

  return result;
};

const initData = () => {
  const progression = getProgression(
    getRandomInt(minNumberForGames, maxNumberForGames),
    getRandomInt(minNumberForGames, maxNumberForGames),
    progressionLength,
  );
  const imaginedIndex = getRandomInt(0, progressionLength - 1);
  const imaginedNumber = progression[imaginedIndex];

  const imagedProgression = progression.map((num, i) => (i === imaginedIndex ? '..' : num));

  return {
    question: imagedProgression.join(' '),
    answer: String(imaginedNumber),
  };
};

const progrGame = () => {
  runGame(description, initData);
};

export default progrGame;
