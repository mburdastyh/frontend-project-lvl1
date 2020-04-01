import readlineSync from 'readline-sync';
import {
  getRandomInt, checkUserAnswer, maxNumberForGames, numOfAttempts,
} from '../index.js';

const evenGame = (name) => {
  let amountOfRightAns = 0;

  do {
    const num = getRandomInt(maxNumberForGames);
    console.log(`Question: ${num}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const properAnswer = (num % 2 === 0) ? 'yes' : 'no';

    const result = checkUserAnswer(userAnswer, properAnswer);

    amountOfRightAns = (result) ? amountOfRightAns + 1 : 0;
  } while (amountOfRightAns !== numOfAttempts);

  console.log(`Congratulations, ${name}!`);

  return 0;
};

export default evenGame;
