// @ts-check

import readlineSync from 'readline-sync';

const numOfAttempts = 3;
const maxNumberForGames = 100;

export const sayHiAndAskName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${name}!`);

  return name;
};

export const getRandomInt = (num) => {
  const max = Math.floor(num) + 1;

  return Math.floor(Math.random() * (max - 1)) + 1;
};

export const getRandomExpression = () => {
  const operators = ['+', '-', '*'];

  const a = getRandomInt(maxNumberForGames);
  const b = getRandomInt(maxNumberForGames);
  const operator = operators[getRandomInt(operators.length) - 1];

  return {
    a,
    b,
    operator,
  };
};

export const checkUserAnswer = (userAnswer, properAnswer, userName) => {
  if (userAnswer === String(properAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${properAnswer}".`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export const evenGame = (name) => {
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

export const calcGame = (name) => {
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
