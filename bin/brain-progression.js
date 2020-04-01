#!/usr/bin/env node

import { sayHiAndAskName } from '../src/index.js';
import progrGame from '../src/games/progrGame.js';

const userName = sayHiAndAskName();

console.log('What number is missing in the progression?');
progrGame(userName);
