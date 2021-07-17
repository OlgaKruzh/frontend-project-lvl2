import { getExtension } from './utils.js';

const isJSON = (filePath) => {
  if (getExtension(filePath) === 'json' || getExtension(filePath) === 'yml') {
    return true;
  }
  return false;
};
