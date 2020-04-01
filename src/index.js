// @ts-check
import readlineSync from 'readline-sync';

export const numOfAttempts = 3;
export const maxNumberForGames = 100;
export const progressionLength = 10;

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

export const getGcd = (value1, value2) => {
  if (value2 === 0) {
    return Math.abs(value1);
  }

  return getGcd(value2, value1 % value2);
};

export const getProgression = (length) => {
  const firstValue = getRandomInt(maxNumberForGames);
  const stepOfProgression = getRandomInt(10);

  const result = [];
  let currentValue = firstValue;
  for (let i = 0; i < length; i += 1) {
    result.push(currentValue);
    currentValue += stepOfProgression;
  }
  return result;
};
