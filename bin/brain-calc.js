#!/usr/bin/env node

import { sayHiAndAskName } from '../src/index.js';
import calcGame from '../src/games/calcGame.js';

const userName = sayHiAndAskName();

calcGame(userName);
