import {
  getRandomInt, maxNumberForGames, runGame,
} from '../index.js';

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

const initData = () => getRandomExpression();

const askQuestion = (value) => {
  console.log(`Question: ${value.a} ${value.operator} ${value.b}`);
};

const getProperAnswer = (value) => {
  switch (value.operator) {
    case '+':
      return value.a + value.b;
    case '-':
      return value.a - value.b;
    default:
      return value.a * value.b;
  }
};

const calcGame = () => {
  const rules = 'What is the result of the expression?';

  runGame(rules, initData, askQuestion, getProperAnswer);
};

export default calcGame;
