
import { compareObjects, createKeysList, readFile } from './utils.js';

const compareData = (filePathFromUser1, filePathFromUser2) => {
  const data1 = readFile(filePathFromUser1);
  const data2 = readFile(filePathFromUser2);
  const keysList = createKeysList(data1, data2);
  return compareObjects(data1, data2, keysList);
};

export default compareData;