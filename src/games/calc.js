import { getRandomInt, maxNumberForGames } from '../utils.js';
import runGame from '../index.js';

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

const initData = () => {
  const { a, b, operator } = getRandomExpression();

  let res = 0;
  switch (operator) {
    case '+':
      res = a + b;
      break;
    case '-':
      res = a - b;
      break;
    default:
      res = a * b;
  }

  return {
    question: `${a} ${operator} ${b}`,
    answer: String(res),
  };
};

const calcGame = () => {
  const rules = 'What is the result of the expression?';

  runGame(rules, initData);
};

export default calcGame;
