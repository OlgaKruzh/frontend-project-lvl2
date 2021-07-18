import * as fs from 'fs';
import __ from 'lodash';
import path, { dirname } from 'path';
// для тестирования
import { fileURLToPath } from 'url';

// const expectedValue = `
//  {
//     - follow: false
//       host: hexlet.io
//     - proxy: 123.234.53.22
//     - timeout: 50
//     + timeout: 20
//     + verbose: true
//   }`;
// const pp = path.resolve(, __filename);

// получить абсолютный путь к текущему файлу (в котором нахожусь сейчас) :
const __filename = fileURLToPath(import.meta.url); // => /home/olga/frontend-project-lvl2/src/exerc.js
// принимает путь до файла, возвращает путь к директории, но уже без файла(отсекает файл) из преданной директории :
const __dirname = dirname(__filename); // => /home/olga/frontend-project-lvl2/src
const __dirname1 = dirname(fileURLToPath(import.meta.url)); // в одну строчку, альтернативно
const __dirname2 = dirname('test/filepath1.json'); // => test , не смотря на то что не существует такого пути

// - так можно выстроить явно абсолютный путь в директорию, которая находится выше, например для тестирования
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
console.log(getFixturePath('filepath1.json')); // => /home/olga/frontend-project-lvl2/__fixtures__/filepath1.json

// выстраивает абсолютный путь , но не проверяет! в данном случае не хватает папки src
const res = path.resolve('filepath1.json'); //= > /home/olga/frontend-project-lvl2/filepath1.json
const res1 = path.resolve('letter.doc'); //= > /home/olga/frontend-project-lvl2/letter.doc

// путь до корневой директории проекта, не важно из какого места запускать
// Метод process.cwd() возвращает текущий рабочий каталог процесса Node.js.
const currentDirectory = process.cwd(); // =>  /home/olga/frontend-project-lvl2

// так работает basename:
console.log(path.basename(process.cwd())); // => frontend-project-lvl2
console.log(path.basename(path.resolve('filepath1.json'))); // => filepath1.json

// path.resolve с одним аргументом не очень имеет мысл.
console.log(path.resolve(process.cwd())); //= > /home/olga/frontend-project-lvl2
// а вот если 2 аргумента- путь до корменвой директории и путь от корневой(файл) то имеет смысл.
// Если 2 аргумент передан корректный, выстраивается абсолютный путь: т.е. путь до корневой папки +  путь внутри папки
const filePathFromUser = 'src/index.js';
const filePath = path.resolve(process.cwd(), filePathFromUser); // => /home/olga/frontend-project-lvl2/src/index.js

// Относительный путь до файла от текущей директории:
const filename = filePathFromUser;
const myPath = path.resolve(__dirname, filename);

const myPath1 = path.resolve(__dirname, 'filename.js');// => /home/olga/frontend-project-lvl2/src/filename.js
console.log(myPath); //= > /home/olga/frontend-project-lvl2/src/src/index.js
const filename1 = 'filepath1.json';
const getFixturePath1 = (filename1) => path.join(__dirname, '..', '__fixtures__', filename1); // =>
// /home/olga/frontend-project-lvl2/__fixtures__/filepath1.json  join отбрасывает первый сегмент пути
console.log(getFixturePath1(filename1));

console.log(`
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);

console.log(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
