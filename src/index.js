// @ts-check
import readlineSync from 'readline-sync';

const numOfAttempts = 3;

const runGame = (rules, initData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let amountOfRightAns = 0; amountOfRightAns < numOfAttempts; amountOfRightAns += 1) {
    const { question, answer } = initData();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');

    if (amountOfRightAns === numOfAttempts - 1) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default runGame;
