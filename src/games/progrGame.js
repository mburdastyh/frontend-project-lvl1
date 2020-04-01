import readlineSync from 'readline-sync';
import {
  getProgression, getRandomInt, checkUserAnswer, numOfAttempts, progressionLength,
} from '../index.js';

const progrGame = (name) => {
  let amountOfRightAns = 0;

  do {
    const progression = getProgression(progressionLength);
    const imaginedIndex = getRandomInt(progressionLength) - 1;
    const imaginedNumber = progression[imaginedIndex];
    // progression[imaginedIndex] = '..';

    const imagedProgression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      imagedProgression.push(String(progression[i]));
    }
    imagedProgression[imaginedIndex] = '..';

    console.log(`Question: ${imagedProgression.join(' ')}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const properAnswer = imaginedNumber;

    const result = checkUserAnswer(userAnswer, properAnswer);

    amountOfRightAns = (result) ? amountOfRightAns + 1 : 0;
  } while (amountOfRightAns !== numOfAttempts);

  console.log(`Congratulations, ${name}!`);

  return 0;
};

export default progrGame;
