import * as fs from 'fs';
// import { jest } from '@jest/globals';
import genDiff from '../src/index.js';

const path1Absolute = '/home/olga/frontend-project-lvl2/__fixtures__/filepath1.json';
const path2Absolute = '/home/olga/frontend-project-lvl2/__fixtures__/filepath1.json';

const path1Relative = '__fixtures__/filepath1.json';
const path2Relative = '__fixtures__/filepath2.json';

const json1 = `{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}`;

const json2 = `{
    "timeout": 20,
    "verbose": true,
    "host": "hexlet.io"
  }`;

const expectedValue = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

const expectedValue2 = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

const expectedValue3 = fs.readFileSync('__fixtures__/text.txt', 'utf8');

test('my first test', () => {
  // expect(genDiff(path1Absolute, path2Absolute)).toEqual(expectedValue);
  // expect(genDiff(path1Absolute, path2Absolute)).toEqual(expectedValue2);
  expect(genDiff(json1, json2)).toEqual(expectedValue);
});
