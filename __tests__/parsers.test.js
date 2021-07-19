
import { parse } from '../src/parsers.js';

const path1 = '__fixtures__/filepath1.yml';
const expectedValue = {
    host: "hexlet.io",
    timeout: 50,
    proxy: "123.234.53.22",
    follow: false
    };


test('parse test', () => {
   
    expect(parse(path1)).toEqual(expectedValue);  
  });