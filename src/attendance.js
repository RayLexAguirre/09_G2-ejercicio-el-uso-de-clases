const TYPES = ["Asistencia", "Falta", "Retardo", "Justificada"];

export default class Attendance {
    constructor(studentId, date, type){
        this._studentId = studentId;
        this._date = date;
        this._date.setHours(0, 0, 0, 0);
        this._setType(type);
    }

    _setType(type){
        if(type <= 0 || type > 4){ 
            this._type = 2;
        } else {
            this._type = type;
        }
    }

    getStudentId(){
        return this._studentId;
    }

    getDate(){
        return this._date;
    }

    getType(){
        return this._type;
    }

    getTypeByName(){
        return TYPES[this._type - 1];
    }

    equals(attendance){
        if(attendance.getStudentId() == this._studentId && attendance.getDate().getTime() == this._date.getTime()){
            return true;
        } else {
            return false;
        }
    }
}