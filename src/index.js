// import * as fs from 'fs';
// import path from 'path';
// import __ from 'lodash';
import { compareObjects, createKeysList, getContentInJsonFormat } from './utils.js';

const compareData = (filePathFromUser1, filePathFromUser2) => {
  const data1 = getContentInJsonFormat(filePathFromUser1);
  const data2 = getContentInJsonFormat(filePathFromUser2);
  const keysList = createKeysList(data1, data2);
  return compareObjects(data1, data2, keysList);
};

export default compareData;

// const getFileContent = (filePath) => fs.readFileSync(filePath, 'utf8');

// const isJSON = (filePath) => {
//  if (getExtension(filePath) === 'json' || getExtension(filePath) === 'yml') {
//    return true;
//  }
//  return false;
// };

// const parse = (content) => JSON.parse(content);

// const prepareDataToCompare = (filePath) => {
//   if (isJSON(filePath) === true) {
//     const textFromFile = getFileContent(filePath);
//     return parse(textFromFile);
//   }
//   return 'the file you are trying to parse is not a JSON format';
// };

// //const createKeysList = (obj1, obj2) => __.union(Object.keys(obj1), Object.keys(obj2)).sort();

// //const compareObjects = (obj1, obj2, keyList) => {
//  // const difference = keyList.map((key) => {
//  /*   if (__.has(obj1, key) && __.has(obj2, key)) {
//       if (__.isEqual(obj1[key], obj2[key])) {
//         return `    ${key}: ${obj2[key]}`;
//       }
//       return `  ${"-"} ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
//     }
//     if (!__.has(obj2, key)) {
//       return `  ${"-"} ${key}: ${obj1[key]}`;
//     }
//     if (!__.has(obj1, key)) {
//       return `  + ${key}: ${obj2[key]}`;
//     }
//     return difference;
//   });
//   const result = difference.join('\n');
//   return `{\n${result}\n}`;
// }; */

// const genDiff = (path1, path2) => {
//   const path1Resolved = path.resolve(path1);
//   const path2esolved = path.resolve(path2);

//   const path1Data = prepareDataToCompare(path1Resolved);
//   const path2Data = prepareDataToCompare(path2esolved);
//   const keysList = createKeysList(path1Data, path2Data);
//   return compareObjects(path1Data, path2Data, keysList);
// };
// export default genDiff;
