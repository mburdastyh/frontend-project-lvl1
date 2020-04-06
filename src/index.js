// @ts-check
import readlineSync from 'readline-sync';

export const numOfAttempts = 3;
export const maxNumberForGames = 100;

export const getRandomInt = (num) => {
  const max = Math.floor(num) + 1;

  return Math.floor(Math.random() * (max - 1)) + 1;
};

const checkUserAnswer = (userAnswer, properAnswer) => {
  if (userAnswer === String(properAnswer)) {
    console.log('Correct!');

    return true;
  }

  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${properAnswer}".`);

  return false;
};

export const runGame = (rules, initData, askQuestion, getProperAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let amountOfRightAns = 0; amountOfRightAns < numOfAttempts; amountOfRightAns += 1) {
    const data = initData();
    askQuestion(data);

    const userAnswer = readlineSync.question('Your answer: ');
    const properAnswer = getProperAnswer(data);

    const isCorrectAnswer = checkUserAnswer(userAnswer, properAnswer);

    if (!isCorrectAnswer) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (amountOfRightAns === numOfAttempts - 1) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
