import __ from 'lodash';
import path from 'path';

const expectedValue = `{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50
    + timeout: 20
    + verbose: true
  }`;

const res = path.resolve('filepath1.json');
console.log(expectedValue);
const res1 = path.resolve('letter.doc');

console.log(res);
console.log(res1);
console.log(`Current directory: ${process.cwd()}`);

const root = path.dirname('src');
console.log(root);
path.basename(process.cwd());
console.log(process.cwd());
path.basename(path.resolve());

console.log(path.basename(path.resolve(process.cwd())));

