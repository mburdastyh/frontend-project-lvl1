// @ts-check
import readlineSync from 'readline-sync';

export const numOfAttempts = 3;
export const maxNumberForGames = 100;

export const sayHiAndAskName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const getRandomInt = (num) => {
  const max = Math.floor(num) + 1;

  return Math.floor(Math.random() * (max - 1)) + 1;
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

export const runGame = (initData, askQuestion, getProperAnswer, name) => {
  let amountOfRightAns = 0;

  do {
    const data = initData();
    askQuestion(data);

    const userAnswer = readlineSync.question('Your answer: ');
    const properAnswer = getProperAnswer(data);

    const result = checkUserAnswer(userAnswer, properAnswer, name);

    if (!result) {
      break;
    }

    amountOfRightAns += 1;
  } while (amountOfRightAns < numOfAttempts);

  if (amountOfRightAns === numOfAttempts) {
    console.log(`Congratulations, ${name}!`);
  }
};
