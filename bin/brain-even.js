#!/usr/bin/env node

import { sayHiAndAskName } from '../src/index.js';
import evenGame from '../src/games/evenGame.js';

const userName = sayHiAndAskName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenGame(userName);
