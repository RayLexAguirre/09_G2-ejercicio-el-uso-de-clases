import Name from '../src/name';
import getMethods from './get-methods';

const METHODS = [
  'getFullName',
  'getFullNameReverse',
  'hasOwnProperty',
  'toLocaleString',
  'valueOf',
  'constructor',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
];
test('name class constructor', () => {
  let obj = new Name('jUaN', 'pÉrEz', 'gONZALEZ');

  expect(obj._name.toLowerCase()).toBe('juan');
  expect(obj._firstLastName.toLowerCase()).toBe('pérez');
  expect(obj._secondLastName.toLowerCase()).toBe('gonzalez');
});

test('name class métodos encapsulados', () => {
  let obj = new Name('jUaN', 'pÉrEz', 'gONZALEZ');

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

test('name class métodos', () => {
  let obj = new Name('jUaN', 'pÉrEz', 'gONZALEZ');

  expect(obj.getFullName()).toBe('Juan Pérez Gonzalez');
  expect(obj.getFullNameReverse()).toBe('Pérez Gonzalez Juan');
});
