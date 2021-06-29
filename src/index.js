import * as fs from 'fs';
import path from 'path';
import __ from 'lodash';

const getFileContent = (filePath) => fs.readFileSync(filePath, 'utf8');
const parseContentToData = (fileContent) => JSON.parse(fileContent);

const prepareDataToCompare = (filePath) => {
  const textFromFile = getFileContent(filePath);
  return parseContentToData(textFromFile);
};

const createKeysList = (obj1, obj2) => __.union(Object.keys(obj1), Object.keys(obj2)).sort();

const parseFiles = (obj1, obj2, keyList) => {
  const difference = keyList.map((key) => {
    if (__.has(obj1, key) && __.has(obj2, key)) {
      if (__.isEqual(obj1[key], obj2[key])) {
        return `    ${key}: ${obj2[key]}`;
      }
      return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
    }
    if (!__.has(obj2, key)) {
      return `  - ${key}: ${obj1[key]}`;
    }
    if (!__.has(obj1, key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
    return difference;
  });
  const result = difference.join('\n');
  return `{\n${result}}`;
};

const genDiff = (path1, path2) => {
  const path1Resolved = path.resolve(path1);
  const path2esolved = path.resolve(path2);

  const path1Data = prepareDataToCompare(path1Resolved);
  const path2Data = prepareDataToCompare(path2esolved);
  const keysList = createKeysList(path1Data, path2Data);
  return parseFiles(path1Data, path2Data, keysList);
};
export default genDiff;
