import { getRandomInt, maxNumberForGames, minNumberForGames } from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const maxOperatorIndex = operators.length - 1;

  return operators[getRandomInt(0, maxOperatorIndex)];
};

const generateData = () => {
  const a = getRandomInt(minNumberForGames, maxNumberForGames);
  const b = getRandomInt(minNumberForGames, maxNumberForGames);
  const operator = getRandomOperator();

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
  runGame(description, generateData);
};

export default calcGame;
