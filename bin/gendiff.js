#!/usr/bin/env node

import { Command } from 'commander';
//import * as fs from 'fs';
import path from 'path';
//import { path1, path2, genDiff } from "../src/index.js";

import * as fs from 'fs';
//import path from 'path';
import _ from 'lodash';

const program = new Command();

const getFileContent = (path) => fs.readFileSync(path, "utf8");
const parseContentToData = (fileContent) => JSON.parse(fileContent);

const prepareDataToCompare = (path) => {
const textFromFile = getFileContent(path);
return parseContentToData(textFromFile);
};

//const sortObject = obj => Object.keys(obj).sort().reduce((result, key) => (result[key] = obj[key], result), {});
const createKeysList = (obj1, obj2) => _.union(Object.keys(obj1), Object.keys(obj2)).sort();

const getDifference = (obj1, obj2, keyList) => {
    let difference = '';
    for (const key of keyList) {
      if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)){
        obj1[key] === obj2[key] ? 
        difference += difference + "    " + key + ": " + obj2[key] + "\n" :
        difference = difference + "  - " + key + ": " + obj1[key] + "\n" + "  + " + key + ": " + obj2[key] + "\n";  
      }
      if(!obj1.hasOwnProperty(key)) {
        difference += "  - " + key + ": " + obj2[key] + "\n";
      }
      if(!obj2.hasOwnProperty(key)) {
        difference += "  + " + key + ": " + obj1[key] + "\n";
      }      
    }
    return "{\n" + difference + "}";
  };

export const genDiff = (path1, path2) => {
    const firstPathData = prepareDataToCompare(path1);
    const secondPathData = prepareDataToCompare(path2);
    const keysList = createKeysList(firstPathData, secondPathData);
    return getDifference(firstPathData, secondPathData, keysList);
};


//const program = new Command();

program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => {
       const path1 = path.resolve(filepath1);
       const path2 = path.resolve(filepath2);
        console.log(genDiff(path1, path2));

    })
    .configureHelp({
        reverseOptions: true
    });

    console.log('Привет!');
    program.parse(process.argv);
  //  const options = program.opts();
    
  //  if (options.genDiff) console.log(genDiff(path1, path2));