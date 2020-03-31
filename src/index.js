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
  const operator = operators[operators.length - 1];

  return `${a} ${operator} ${b}`;
};

export const evenGame = (name) => {
  let countOfRightAnswers = 0;

  do {
    const num = getRandomInt(maxNumberForGames);
    console.log(`Question: ${num}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const properAnswer = (num % 2 === 0) ? 'yes' : 'no';
    if (userAnswer === properAnswer) {
      console.log('Correct!');
      countOfRightAnswers += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${properAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      countOfRightAnswers = 0;
    }
  } while (countOfRightAnswers !== numOfAttempts);

  console.log(`Congratulations, ${name}!`);
};
