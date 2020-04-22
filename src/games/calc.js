import { getRandomInt, maxNumberForGames, minNumberForGames } from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const amountOfOperators = operators.length - 1;

  const a = getRandomInt(minNumberForGames, maxNumberForGames);
  const b = getRandomInt(minNumberForGames, maxNumberForGames);
  const operator = operators[getRandomInt(0, amountOfOperators)];

  return {
    a,
    b,
    operator,
  };
};

const initData = () => {
  const { a, b, operator } = getRandomExpression();

  let expression;
  switch (operator) {
    case '+':
      expression = a + b;
      break;
    case '-':
      expression = a - b;
      break;
    case '*':
      expression = a * b;
      break;
    default:
      break;
  }

  return {
    question: `${a} ${operator} ${b}`,
    answer: String(expression),
  };
};

const calcGame = () => {
  runGame(description, initData);
};

export default calcGame;
