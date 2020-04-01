import readlineSync from 'readline-sync';
import { getRandomExpression, checkUserAnswer, numOfAttempts } from '../index.js';

const calcGame = (name) => {
  let amountOfRightAns = 0;
  do {
    const exp = getRandomExpression();
    console.log(`Question: ${exp.a} ${exp.operator} ${exp.b}`);

    const userAnswer = readlineSync.question('Your answer: ');
    let properAnswer;
    switch (exp.operator) {
      case '+':
        properAnswer = exp.a + exp.b;
        break;
      case '-':
        properAnswer = exp.a - exp.b;
        break;
      default:
        properAnswer = exp.a * exp.b;
        break;
    }

    const result = checkUserAnswer(userAnswer, properAnswer);

    amountOfRightAns = (result) ? amountOfRightAns + 1 : 0;
  } while (amountOfRightAns !== numOfAttempts);

  console.log(`Congratulations, ${name}!`);

  return 0;
};

export default calcGame;
