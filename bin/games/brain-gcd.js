#!/usr/bin/env node

import { sayHiAndAskName, gcdGame } from '../../src/index.js';

const userName = sayHiAndAskName();

console.log('Find the greatest common divisor of given numbers.');
gcdGame(userName);
