#!/usr/bin/env node

import { sayHiAndAskName } from '../src/index.js';
import calcGame from '../src/games/calcGame.js';

const userName = sayHiAndAskName();

console.log('What is the result of the expression?');
calcGame(userName);
