import _ from 'lodash';
import compareObjects from '../src/compareObjects.js';
import { createKeysList } from '../src/utils.js';

const obj1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};
const obj2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

const keyList = [
  'follow',
  'host',
  'proxy',
  'timeout',
  'verbose',
];

const expectedResult = `
 {
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50
    + timeout: 20
    + verbose: true
  }`;

test('compare objects test', () => {
  // expect(genDiff(path1Absolute, path2Absolute)).toEqual(expectedValue);
  // expect(genDiff(path1Absolute, path2Absolute)).toEqual(expectedValue2);
  expect(compareObjects(obj1, obj2, keyList)).toEqual(expectedResult);
});
