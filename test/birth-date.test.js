import BirthDate from '../src/birth-date';
import getMethods from './get-methods';

const METHODS = [
  'getAge',
  'hasOwnProperty',
  'toLocaleString',
  'valueOf',
  'constructor',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
];

test('birthDate class constructor', () => {
  let date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setFullYear(date.getFullYear() - 15);
  let obj = new BirthDate(date);

  expect(obj._date.getFullYear()).toBe(date.getFullYear());
});

test('birthDate class métodos', () => {
  let date = new Date();
  date.setHours(0, 0, 0, 0);

  date.setFullYear(date.getFullYear() - 15);
  let obj = new BirthDate(date);

  expect(obj.getAge()).toBe(15);
});

test('birthDate class métodos encapsulados', () => {
  let date = new Date();
  date.setFullYear(date.getFullYear() - 15);
  let obj = new BirthDate(date);

  Object.getOwnPropertyNames(obj).filter(
    (item) => typeof obj[item] === 'function'
  );
  let methods = getMethods(obj);

  let notEncapsulated = [];
  methods.forEach((m) => {
    if (!m.startsWith('_')) {
      if (!METHODS.find((element) => element === m)) {
        notEncapsulated.push(m);
      }
    }
  });

  if (notEncapsulated.length > 0) {
    console.log(notEncapsulated);
  }

  expect(notEncapsulated.length).toBe(0);
});
