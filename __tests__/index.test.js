import * as fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
// import { jest } from '@jest/globals';
import compareData from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const path1 = '__fixtures__/filepath1.json';
const path2 = '__fixtures__/filepath2.json';
const path3 = getFixturePath('filepath1.json');
const path4 = getFixturePath('filepath2.json');

const expectedValue = fs.readFileSync('__fixtures__/expected_file.txt', 'utf8');
const expectedValue1 = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('compareData test', () => {
  expect(compareData(path1, path2)).toEqual(expectedValue);
  expect(compareData(path3, path4)).toEqual(expectedValue);
  expect(compareData(path3, path4)).toEqual(expectedValue1);
});
