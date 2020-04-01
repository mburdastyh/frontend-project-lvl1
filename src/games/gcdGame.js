import readlineSync from 'readline-sync';
import {
  getRandomInt, checkUserAnswer, getGcd, numOfAttempts, maxNumberForGames,
} from '../index.js';

const gcdGame = (name) => {
  let amountOfRightAns = 0;

  do {
    const n1 = getRandomInt(maxNumberForGames);
    const n2 = getRandomInt(maxNumberForGames);

    console.log(`Question: ${n1} ${n2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const properAnswer = getGcd(n1, n2);

    const result = checkUserAnswer(userAnswer, properAnswer);

    amountOfRightAns = (result) ? amountOfRightAns + 1 : 0;
  } while (amountOfRightAns !== numOfAttempts);

  console.log(`Congratulations, ${name}!`);

  return 0;
};

export default gcdGame;
