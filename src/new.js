import * as fs from 'fs';
import path from 'path';
import __ from 'lodash';
import { compareObjects, createKeysList, getContentInJsonFormat } from './utils.js';
// import compareObjects from './compareObjects.js';

const compareData = (filePathFromUser1, filePathFromUser2) => {
  const data1 = getContentInJsonFormat(filePathFromUser1);
  const data2 = getContentInJsonFormat(filePathFromUser2);
  const keysList = createKeysList(data1, data2);
  return compareObjects(data1, data2, keysList);
};

// export default compareData;
