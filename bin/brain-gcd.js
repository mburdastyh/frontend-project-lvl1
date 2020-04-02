#!/usr/bin/env node

import { sayHiAndAskName } from '../src/index.js';
import gcdGame from '../src/games/gcdGame.js';

const userName = sayHiAndAskName();

gcdGame(userName);
