import * as fs from 'fs';
import path from 'path';
import __ from 'lodash';

export const getExtention = (filepath) => path.extname(filepath).toLowerCase();
// проверить расширение альтернатива

export const readFile = (filePath) => {
  const extention = getExtention(filePath);
  if (extention === '.json' || extention === '.yml') {
    return JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf8'));
  }
  return 'it is not JSON file';
};

export const createKeysList = (obj1, obj2) => __.union(Object.keys(obj1), Object.keys(obj2)).sort();

export const showDifference = (obj1, obj2, keyList) => {
  const difference = keyList.map((key) => {
    if (__.has(obj1, key) && __.has(obj2, key)) {
      if (__.isEqual(obj1[key], obj2[key])) {
        return `    ${key}: ${obj2[key]}`;
      }
      return `  ${'-'} ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
    }
    if (!__.has(obj2, key)) {
      return `  ${'-'} ${key}: ${obj1[key]}`;
    }
    if (!__.has(obj1, key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
    return difference;
  });
  const result = difference.join('\n');
  return `{\n${result}\n}`;
};

export const compareObjects = (obj1, obj2) => {
  const keyList = createKeysList(obj1, obj2);
  const difference = showDifference(obj1, obj2, keyList);
  return difference;
};

// export const compareObjects = (obj1, obj2, keyList) => {
//   const difference = keyList.map((key) => {
//     if (__.has(obj1, key) && __.has(obj2, key)) {
//       if (__.isEqual(obj1[key], obj2[key])) {
//         return `    ${key}: ${obj2[key]}`;
//       }
//       return `  ${'-'} ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
//     }
//     if (!__.has(obj2, key)) {
//       return `  ${'-'} ${key}: ${obj1[key]}`;
//     }
//     if (!__.has(obj1, key)) {
//       return `  + ${key}: ${obj2[key]}`;
//     }
//     return difference;
//   });
//   const result = difference.join('\n');
//   return `{\n${result}\n}`;
// };

// просто хочу сохранить находки
export const getExtension = (filePath) => {
  const basename = filePath.split(/[\\/]/).pop();
  const pos = basename.lastIndexOf('.');
  if (basename === '' || pos < 1) return '';
  return basename.slice(pos + 1);
};

const createCurrentPath = (filePath) => path.resolve(process.swd(), filePath);

const parse = (content) => JSON.parse(content);

// export const getContentInJsonFormat = (filePath) => {
//   if (isJSON(filePath)) {
//     try {
//       return JSON.parse(fs.readFileSync(path.resolve(process.swd(), filePath), 'utf8'));
//     } catch (error) {
//       console.log(error);
//       process.exit(1);
//     }
//   }
// };
