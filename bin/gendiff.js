#!/usr/bin/env node

import { Command } from 'commander';
import compareData from '../src/index.js';
// import genDiff from '../src/index.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(compareData(filepath1, filepath2)); // в прежнем варианте было с консоле лог
  })
  .configureHelp({
    reverseOptions: true,
  });
// const options = program.opts();
// здесь логика по опции
program.parse(process.argv);
