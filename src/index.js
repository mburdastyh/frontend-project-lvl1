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

const getRandomInt = (num) => {
  const max = Math.floor(num) + 1;

  return Math.floor(Math.random() * (max - 1)) + 1;
};

const getRandomExpression = () => {
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

const checkUserAnswer = (userAnswer, properAnswer, userName) => {
  if (userAnswer === String(properAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${properAnswer}".`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const getGcd = (value1, value2) => {
  if (value2 === 0) {
    return Math.abs(value1);
  }

  return getGcd(value2, value1 % value2);
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

export const gcdGame = (name) => {
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
