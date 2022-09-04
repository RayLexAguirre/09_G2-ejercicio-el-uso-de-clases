![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
>Petite France, Strasbourg, France. Photo by <a href="https://unsplash.com/@lucaju1999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lucile Noiriel</a> on <a href="/t/travel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
# Ejercicio: Uso de clases

El objetivo de este ejercicio es mostrar el uso de clases para:

- Reutilización de código
- Creación de _nuevos tipos de datos_.

## Requerimientos funcionales

1. (28 Puntos) Programar la clase `Name`. Deberá incluir los siguientes:
   - Atributos:
     - `String name` nombre o nombres
     - `String  firstLastName` apellido paterno.
     - `String  secondLastName` apellido materno.
   - Métodos
     - `constructor()` recibe valores iniciales para `name`, `firstLastName` y `secondLastName`.  
     - `getFullName()` regresa el nombre completo iniciando por nombre, después el apellido paterno y por último el apellido materno. La primer letra de cada nombre o apellido deberá ser mayúscula y las demás minúsculas. Por ejemplo: Juan Gutierrez Zamora.  
     - `getFullNameReverse()` regresa el nombre completo, iniciando por el apellido paterno, después el materno y por último el nombre. La primer letra de cada nombre o apellido deberá ser mayúscula y las demás minúsculas. Por ejemplo: Gutiérrez Zamora Juán.

2. (12 Puntos) Programar la clase `BirthDate`. Deberá incluir los siguientes:
   - Atributos:
     - `Date date` la fecha de nacimiento
   - Métodos
     - `constructor()` recibe valores iniciales para `date`.
     - `getAge()` regresa la edad correspondiente a esa fecha de nacimiento.
  
3. (20 puntos) Programar la clase `Student`. Deberá incluir los siguientes:
   - Atributos:
     - `Name name` nombre del estudiante
     - `BirthDate birthDate` fecha de nacimiento del estudiante
     - `Number id` número de cuenta o de identificación del estudiante
   - Métodos
     - `constructor()` recibe valores iniciales para `name`, `birthDate` e `id`.
     - `getName()` regresa el nombre del estudiante.
     - `getBirthDate()` regresa la fecha de nacimiento del estudiante.
     - `getId()` regresa el id del estudiante.
     - `equals(student)` regresa `true` si es el mismo estudiante que el que se envía como parámetro ó `false` si no son iguales. Dos estudiantes son iguales cuando tienen el mismo `id`.

4. (24 puntos) Programar la clase `Attendance`. Deberá incluir los siguientes:
   - Atributos:
     - `Number studentId` número de identificación del estudiante
     - `Date date` fecha en que se registra la asistencia.
     - `Number type` tipo de asistencia, puede ser:
       - 1 asistencia
       - 2 falta
       - 3 retardo
       - 4 justificada
   - Métodos
     - `constructor()` recibe valores iniciales para `studentId`, `date` y `type`.
     - `getStudentId()` regresa id del estudiante.
     - `getDate()` regresa la fecha de la asistencia.
     - `getType()` regresa el tipo de asistencia.
     - `getTypeByName()` si `type` es 1 regresa `Asistencia`, si es 2 regresa `Falta`, si es 3 regresa `Retardo` y si es 4 regresa `Justificada`.
     - `equals(attendance)` regresa `true` si es la misma asistencia que la que se envía como parámetro ó `false` si no son iguales. Dos asistencias son iguales cuando tienen la misma `date` y `studentId`.

5. (16 puntos) Programar la clase `Course`. Deberá incluir los siguientes:
   - Atributos:
     - `String name` nombre del curso.
     - `Student[] students` estudiantes del curso.
     - `Attendance[] attendanceList` lista de asistencia.
   - Métodos
     - `constructor()` recibe valores iniciales para `name`.
     - `addStudent(student)` agrega un estudiante al curso, regresa `true` si lo agregó o `false` si no lo agregó
     - `removeStudent(student)` elimina al estudiante del curso, regresa `true` si lo eliminó o `false` si no lo eliminó.
     - `addAttendance(attendance)` agrega la asistencia al registro de asistencia del curso. Regresa `true` si la agregó o `false` si no.
     - `getAttendanceByDay(date)` regresa en un vector el listado del registro de asistencia para ese día. El listado deberá estar ordenado alfabéticamente por el nombre y mostrar el nombre, la edad y el tipo de asistencia. Cada registro deberá verse como el siguiente ejemplo: Juan Pérez González (28 años): Asistencia
     - `getAttendanceByStudentId(studentId)` regresa en un vector el listado listado del registro de asistencia para ese estudiante ordenado por fecha. El listado muestra la fecha y el tipo de asistencia. Cada registro deberá verse como el siguiente ejemplo: Lunes 10/Feb/2021: Retardo

## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
