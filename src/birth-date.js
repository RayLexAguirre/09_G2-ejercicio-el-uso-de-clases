export default class BirthDate {
    constructor(date) {
        this._date = date;
    }

    getAge() {
        let today = new Date(); 
        let diff = today.getTime() - this._date.getTime();
        let dateDiff = new Date(diff);
        let age = dateDiff.getUTCFullYear() - 1970;

        return age;
    }
}