import { compareObjects, readFile } from './utils.js';

const compareData = (filePathFromUser1, filePathFromUser2) => {
  const data1 = readFile(filePathFromUser1);
  const data2 = readFile(filePathFromUser2);
  return compareObjects(data1, data2);
};

export default compareData;
