
import { jest } from '@jest/globals';
import genDiff from '../src/index.js';

const json1 = {
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false
  };

  const json2 = {
    "timeout": 20,
    "verbose": true,
    "host": "hexlet.io"
  };

  test ('my first test', () => {
      expect(genDiff(json1, json2)).toEqual(`{
        - follow: false
          host: hexlet.io
        - proxy: 123.234.53.22
        - timeout: 50
        + timeout: 20
        + verbose: true
      }`);
  });