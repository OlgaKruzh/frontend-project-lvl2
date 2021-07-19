import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const parse = (filepath) => {
  const extention = path.extname(filepath);
  if (extention.toLowerCase() === '.yml' || extention.toLowerCase() === '.yaml') {
    return yaml.load(fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf8'));
  } if (extention.toLowerCase() === '.json') {
    return JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf8'));
  }
  return 'format is not valid';
};

export default parse;
// try {
//     const doc = yaml.load(fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf8'));
//     return doc;
// } catch(e) {
//     console.log(e);
// }

// try {
//     const doc = JSON.parse(fs.readFileSync(path.resolve(process.swd(), filePath), 'utf8'));
//           return doc;
// } catch (error) {
//   console.log(error);
//  // process.exit(1);
// }
