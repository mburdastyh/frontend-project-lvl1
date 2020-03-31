#!/usr/bin/env node

import { sayHiAndAskName, evenGame } from '../src/index.js';

const userName = sayHiAndAskName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenGame(userName);
