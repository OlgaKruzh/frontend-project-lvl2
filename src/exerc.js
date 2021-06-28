import path from 'path';

const res = path.resolve('filepath1.json');
const res1 = path.resolve('letter.doc');

console.log(res);
console.log(res1);
console.log(`Current directory: ${process.cwd()}`);

const root = path.dirname('src');
console.log(root);
