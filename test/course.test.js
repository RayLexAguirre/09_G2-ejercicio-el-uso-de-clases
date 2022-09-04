import Course from '../src/course';
import Student from '../src/student';
import Attendance from '../src/attendance';
import BirthDate from '../src/birth-date';
import Name from '../src/name';
import getMethods from './get-methods';

const METHODS = [
  'addStudent',
  'removeStudent',
  'addAttendance',
  'getAttendanceByDay',
  'getAttendanceByStudentId',
  'hasOwnProperty',
  'toLocaleString',
  'valueOf',
  'constructor',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
];

test('attendance class constructor', () => {
  let obj = new Course('Programación');

  expect(obj._name).toBe('Programación');
  expect(obj._students.length).toBe(0);
  expect(obj._attendanceList.length).toBe(0);
});

test('attendance class métodos', () => {
  let studentA = new Student(
    new Name('Juan', 'Pérez', 'Gonzalez'),
    new BirthDate(new Date(2009, 1, 10)),
    1
  );
  let studentB = new Student(
    new Name('Mario', 'Ramírez', 'López'),
    new BirthDate(new Date(2008, 7, 20)),
    2
  );
  let studentC = new Student(
    new Name('María', 'Alcaráz', 'Avila'),
    new BirthDate(new Date(2010, 5, 3)),
    3
  );

  let obj = new Course('Programación Orientada a Objetos');

  obj.addStudent(studentA);
  expect(obj._students[0].getName().getFullName()).toBe('Juan Pérez Gonzalez');
  obj.addStudent(studentB);
  expect(obj._students[1].getName().getFullName()).toBe('Mario Ramírez López');
  obj.addStudent(studentC);
  expect(obj._students[2].getName().getFullName()).toBe('María Alcaráz Avila');

  obj.removeStudent(studentB);
  expect(obj._students.length).toBe(2);
  expect(obj._students[1].getName().getFullName()).toBe('María Alcaráz Avila');

  let date1 = new Date(2021, 2, 16);
  let date2 = new Date(2021, 2, 17);

  expect(obj.addAttendance(new Attendance(3, date1, 1))).toBe(true);
  expect(obj._attendanceList[0].getDate().getTime()).toBe(date1.getTime());

  expect(obj.addAttendance(new Attendance(1, date2, 1))).toBe(true);
  expect(obj._attendanceList[1].getDate().getTime()).toBe(date2.getTime());

  expect(obj.addAttendance(new Attendance(1, date2, 2))).toBe(true);
  expect(obj.addAttendance(new Attendance(2, date2, 2))).toBe(false);
  expect(obj.addAttendance(new Attendance(3, date2, 1))).toBe(true);

  expect(obj.addAttendance(new Attendance(1, date1, 2))).toBe(true);

  let r = obj.getAttendanceByDay(date1);
  expect(r.length).toBe(2);
  expect(r[0]).toBe('Juan Pérez Gonzalez (12 años): Falta');
  expect(r[1]).toBe('María Alcaráz Avila (10 años): Asistencia');

  r = obj.getAttendanceByStudentId(1);
  expect(r.length).toBe(2);
  expect(r[0]).toBe('Martes 16/Mar/2021: Falta');
  expect(r[1]).toBe('Miércoles 17/Mar/2021: Falta');
});

test('course class métodos encapsulados', () => {
  let obj = new Course('Programación Orientada a Objetos');

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

  if (notEncapsulated.length > 0) {
    console.log(notEncapsulated);
  }

  expect(notEncapsulated.length).toBe(0);
});
