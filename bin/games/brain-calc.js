#!/usr/bin/env node

import { sayHiAndAskName, calcGame } from '../../src/index.js';

const userName = sayHiAndAskName();

console.log('What is the result of the expression?');
calcGame(userName);
