import * as fs from 'fs';
//import path from 'path';
import _ from 'lodash';

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


export const path1 = "/home/olga/frontend-project-lvl2/__fixtures__/filepath1.json";
export const path2 = "/home/olga/frontend-project-lvl2/__fixtures__/filepath2.json";

export const genDiff = (path1, path2) => {
    const firstPathData = prepareDataToCompare(path1);
    const secondPathData = prepareDataToCompare(path2);
    const keysList = createKeysList(firstPathData, secondPathData);
    return getDifference(firstPathData, secondPathData, keysList);
};

//console.log(module);
//console.log(genDiff(path1, path2));
