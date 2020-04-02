#!/usr/bin/env node

import { sayHiAndAskName } from '../src/index.js';
import evenGame from '../src/games/evenGame.js';

const userName = sayHiAndAskName();

evenGame(userName);
