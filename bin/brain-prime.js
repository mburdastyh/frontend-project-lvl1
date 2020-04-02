#!/usr/bin/env node

import { sayHiAndAskName } from '../src/index.js';
import primeGame from '../src/games/primeGame.js';

const userName = sayHiAndAskName();

primeGame(userName);
