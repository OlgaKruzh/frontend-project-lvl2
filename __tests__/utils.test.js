import * as fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import {
  getExtention, readFile, createKeysList, showDifference, compareObjects,
} from '../src/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const path1 = '__fixtures__/filepath1.json';
const path3 = getFixturePath('__fixtures__/expected_file.txt');
const path4 = getFixturePath('expected_file.txt');

const user1 = {
  name: 'Anna', age: 19, hobby: 'gaming', alias: 'An',
};
const user2 = {
  name: 'Victor', alias: 'Vik', profession: 'doctor', hobby: 'gaming',
};
const expectedKeyList = ['age', 'alias', 'hobby', 'name', 'profession'];
const expectedCompareObjectsResult = `{
  - age: 19
  - alias: An
  + alias: Vik
    hobby: gaming
  - name: Anna
  + name: Victor
  + profession: doctor
}`;

test('getExtention', () => {
  expect(getExtention(path1)).toEqual('.json');
  expect(getExtention(path3)).toEqual('.txt');
  expect(getExtention(path4)).toEqual('.txt');
});

test('createKeysList', () => {
  expect(createKeysList(user1, user2)).toEqual(expectedKeyList);
});

test('showDifference', () => {
  expect(showDifference(user1, user2, expectedKeyList)).toEqual(expectedCompareObjectsResult);
});

test('compareObjects', () => {
  expect(compareObjects(user1, user2)).toEqual(expectedCompareObjectsResult);
});
