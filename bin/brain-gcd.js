#!/usr/bin/env node

import { sayHiAndAskName } from '../src/index.js';
import gcdGame from '../src/games/gcdGame.js';

const userName = sayHiAndAskName();

console.log('Find the greatest common divisor of given numbers.');
gcdGame(userName);
