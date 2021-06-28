import * as fs from 'fs';
import path from 'path';
import __ from 'lodash';

const getFileContent = (path) => fs.readFileSync(path, 'utf8');
const parseContentToData = (fileContent) => JSON.parse(fileContent);

const prepareDataToCompare = (path) => {
  const textFromFile = getFileContent(path);
  return parseContentToData(textFromFile);
};

const createKeysList = (obj1, obj2) => __.union(Object.keys(obj1), Object.keys(obj2)).sort();

const parseFiles = (obj1, obj2, keyList) => {
  let result = '';
  for (const key of keyList) {
    if (__.has(obj1, key) && __.has(obj2, key)) { // ключи есть везде и
      if (__.isEqual(obj1[key], obj2[key])) { // значения ключей совпадают
        result += `    ${key}: ${obj2[key]}\n`;
      } else {
        result += `  - ${key}: ${obj1[key]}\n`; // значения ключей не совпадают и выводим оба значения.
        result += `  + ${key}: ${obj2[key]}\n`;
      }
    }
    if (!__.has(obj2, key)) {
      result += `  - ${key}: ${obj1[key]}\n`; // ключ только в первом объекте
    }
    if (!__.has(obj1, key)) {
      result += `  + ${key}: ${obj2[key]}\n`; // ключ только во втором объекте
    }
  }
  return `{\n${result}}`;
};

export const genDiff = (path1, path2) => {
  path1 = path.resolve(path1);
  path2 = path.resolve(path2);

  const firstPathData = prepareDataToCompare(path1);
  const secondPathData = prepareDataToCompare(path2);
  const keysList = createKeysList(firstPathData, secondPathData);
  return parseFiles(firstPathData, secondPathData, keysList);
};

// export default genDiff;
