export default class Student{
    constructor(name, birthDate, id){
        this._name = name;
        this._birthDate = birthDate;
        this._id = id;
    }

    getName(){
        return this._name;
    }

    getBirthDate(){
        return this._birthDate;
    }

    getId(){ 
        return this._id;
    }

    equals(student){
        if(student.getId() == this._id){
            return true;
        } else {
            return false;
        }
    }
}