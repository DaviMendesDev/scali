#!/usr/bin/env node

import Scali, { ScaliFramework } from './scali-framework/Scali';
const args = process.argv.slice(2);

const scali = new Scali(args);
scali.run();