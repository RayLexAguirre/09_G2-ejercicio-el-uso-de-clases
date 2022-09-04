import Student from '../src/student';
import BirthDate from '../src/birth-date';
import Name from '../src/name';
import getMethods from './get-methods';

const METHODS = [
  'getName',
  'getBirthDate',
  'getId',
  'equals',
  'hasOwnProperty',
  'toLocaleString',
  'valueOf',
  'constructor',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
];

test('student class constructor', () => {
  let date = new Date();
  date.setHours(0, 0, 0, 0);

  date.setFullYear(date.getFullYear() - 15);
  let bDate = new BirthDate(date);
  let name = new Name('jUaN', 'pÉrEz', 'gONZALEZ');

  let obj = new Student(name, bDate, 100);

  expect(obj._name.getFullName()).toBe('Juan Pérez Gonzalez');
  expect(obj._birthDate.getAge()).toBe(15);
  expect(obj._id).toBe(100);
});

test('student class métodos', () => {
  let date = new Date();
  date.setHours(0, 0, 0, 0);

  date.setFullYear(date.getFullYear() - 15);
  let bDate = new BirthDate(date);
  let name = new Name('jUaN', 'pÉrEz', 'gONZALEZ');

  let obj = new Student(name, bDate, 100);
  let obj2 = new Student(name, bDate, 101);

  expect(obj.getName().getFullName()).toBe('Juan Pérez Gonzalez');
  expect(obj.getBirthDate().getAge()).toBe(15);
  expect(obj.getId()).toBe(100);
  expect(obj.equals(obj)).toBe(true);
  expect(obj.equals(obj2)).toBe(false);
});

test('student class métodos encapsulados', () => {
  let date = new Date();
  date.setFullYear(date.getFullYear() - 15);
  let bDate = new BirthDate(date);
  let name = new Name('jUaN', 'pÉrEz', 'gONZALEZ');

  let obj = new Student(name, bDate, 100);

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
