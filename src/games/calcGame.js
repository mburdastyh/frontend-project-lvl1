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

const calcGame = (name) => {
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

  console.log('What is the result of the expression?');
  runGame(initData, askQuestion, getProperAnswer, name);
};

export default calcGame;
