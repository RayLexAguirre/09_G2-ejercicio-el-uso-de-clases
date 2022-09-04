import Attendance from '../src/attendance';
import getMethods from './get-methods';

const METHODS = [
  'getStudentId',
  'getDate',
  'getType',
  'getTypeByName',
  'equals',
  'hasOwnProperty',
  'toLocaleString',
  'valueOf',
  'constructor',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
];

test('attendance class constructor', () => {
  let obj = new Attendance(100, new Date(2021, 3, 2), 1);

  expect(obj._studentId).toBe(100);
  expect(obj._date.getFullYear()).toBe(2021);
  expect(obj._type).toBe(1);
});

test('attendance class métodos', () => {
  let obj = new Attendance(100, new Date(2021, 3, 2), 1);
  let obj2 = new Attendance(100, new Date(2021, 3, 2), 2);
  let obj3 = new Attendance(100, new Date(2021, 3, 3), 1);

  expect(obj.getStudentId()).toBe(100);
  expect(obj.getDate().getFullYear()).toBe(2021);
  expect(obj.getType()).toBe(1);
  expect(obj.getTypeByName()).toBe('Asistencia');
  expect(obj.equals(obj)).toBe(true);
  expect(obj.equals(obj2)).toBe(true);
  expect(obj.equals(obj3)).toBe(false);
});

test('attendance class métodos encapsulados', () => {
  let obj = new Attendance(100, new Date(2021, 3, 2), 1);

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
