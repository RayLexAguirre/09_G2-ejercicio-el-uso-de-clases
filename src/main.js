import Name from './name.js';
import BirthDate from './birth-date.js';
import Student from './student.js';
import Attendance from './attendance.js';
import Course from './course.js';

let name = new Name("jUAN", "gutIERREZ", "zaMoRA");
let d1 = new BirthDate(new Date(2000, 1, 5));

let name1 = new Name('Juan', 'Pérez', 'Gonzalez');
let bd = new BirthDate(new Date(2000, 4, 10));
let studentA = new Student(name1, bd, 100);

let studentB = new Student(new Name('Manuel', 'Ramírez', 'Acosta'), new BirthDate(new Date(2000, 10, 20)), 101);

let studentC = new Student(new Name('María', 'Ramos', 'Larios'), new BirthDate(new Date(2001, 5, 5), 100));

let a1 = new Attendance(100, new Date(2021, 2, 15), 1);
let a2 = new Attendance(100, new Date(2021, 2, 16), 2);
let a3 = new Attendance(100, new Date(2021, 2, 15), 2);
let a4 = new Attendance(102, new Date(2021, 2, 15), 2);

let course = new Course("Programación Orientada a Objetos");

//console.log(name._capitalizeWord("gutIERREZ"));
console.log(name.getFullName());
console.log(name.getFullNameReverse());

console.log(d1.getAge());

console.log(studentA.equals(studentB));
console.log(studentA.equals(studentC));

console.log(a1.getTypeByName());
console.log(a2.getTypeByName());
console.log(a3.getTypeByName());

console.log(a1.equals(a2));
console.log(a1.equals(a3));
console.log(a2.equals(a3));

console.log(course.addStudent(studentA));
console.log(course.addStudent(studentB));
console.log(course.addStudent(studentC));
console.log(course._student);
console.log(course.removeStudent(studentB));
console.log(course.removeStudent(studentB));   
console.log(course._student);
console.log(course.addAttendance(a1));
console.log(course.addAttendance(a2));
console.log(course.addAttendance(a3));
console.log(course.addAttendance(a4));
console.log(course._attendanceList);
course._attendanceList.forEach((a) => {
    console.log(a.getStudentId());
});

console.log(course.getAttendanceByDay(new Date(2021, 2, 15)));
console.log(course.getAttendenceByStudentId(100)); 