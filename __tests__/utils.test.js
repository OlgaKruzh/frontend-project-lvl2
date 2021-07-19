import * as fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import {
  getExtention, readFile, createKeysList, showDifference, compareObjects, parseContent
} from '../src/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const path1 = '__fixtures__/filepath1.json';
const path2 = getFixturePath('__fixtures__/filepath1.yml');
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
  expect(getExtention(path2)).toEqual(('.yml' || 'yaml'));
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

// test('parseContent', () => {
//     const content = `---

//     host: "hexlet.io"
    
//     timeout: 50
    
//     proxy: "123.234.53.22"
    
//     follow: false`

//     const expectedObject = {
//     host: "hexlet.io",
//     timeout: 50,
//     proxy: "123.234.53.22",
//     follow: false
//     };
//     expect(parseContent(content)).toEqual(expectedObject);
//   });


