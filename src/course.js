const WEEK = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];

const YEAR = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

export default class Course{
    constructor(name){
        this._name = name;
        this._students = new Array(); 
        this._attendanceList = new Array();
    }

    _findStudent(student){
        let resultado = this._students.findIndex((s) => {    
            return s.equals(student);
        })

        return resultado; 
    }
    
    addStudent(student){
        let pos = this._findStudent(student);

        if(pos >= 0){
            return false;
        }

        this._students.push(student);
        return true;
    }

    removeStudent(student){
        let pos = this._findStudent(student);

        if(pos < 0){
            return false;
        }

        this._students.splice(pos, 1);
        return true;
    }

    addAttendance(attendance){
        let pos = this._findStudentById(attendance.getStudentId());

        if(pos < 0){
            return false;
        }

        pos = this._findAttendance(attendance);

        if(pos >= 0){
            this._attendanceList[pos] = attendance;
        } else {
            this._attendanceList.push(attendance);
        }
        
        return true;
    }

    getAttendanceByDay(date){
        date.setHours(0, 0, 0, 0);

        let report = new Array();

        this._attendanceList.forEach((a) => {
            if(a.getDate().getTime() == date.getTime()){
                let pos = this._findStudentById(a.getStudentId());
                let s = this._students[pos];
                let line = `${s.getName().getFullName()} (${s.getBirthDate().getAge()} años): ${a.getTypeByName()}`;
                report.push(line);
            }

        })

        return report.sort();
    }

    getAttendanceByStudentId(studentId) { 
        this._attendanceList.sort(this._compareDates);
        let report = new Array();

        this._attendanceList.forEach((a) => {
            if(a.getStudentId() == studentId){
                let line = `${this._formatDate(a.getDate())}: ${a.getTypeByName()}`;

                report.push(line);
            }
        });

        return report;
    }

    _formatDate(date) {
        return `${WEEK[date.getDay()]} ${date.getDate()}/${YEAR[date.getMonth()]}/${date.getUTCFullYear()}`;
    }

    _compareDates(attendanceA, attendanceB) {
        let dateA = attendanceA.getDate();
        let dateB = attendanceB.getDate(); 

        if(dateA.getTime() > dateB.getTime()){
            return 1;
        } else if(dateA.getTime() < dateB.getTime()){
            return -1;
        } else {
            return 0;
        }
    }

    _findStudentV1(student){
        for(let i = 0; i < this._students.length; i++){
            if(student.equals(this._students[i])){
                return i;
            }
        }
    
        return -1;
    }

    _findStudentById(studentId){
        let resultado = this._students.findIndex((s) => {
            return s.getId() == studentId;
        });

        return resultado;
    }

    _findAttendance(attendance){
        let resultado = this._attendanceList.findIndex((a) => {
            return a.equals(attendance);
        });
    
        return resultado;
    }

}