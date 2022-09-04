export default class Name {
    constructor(name, firstLastName, secondLastName) {
        this._name = name;
        this._firstLastName = firstLastName;
        this._secondLastName = secondLastName;
    }

    getFullName() {
        return `${this._capitalizeWord(this._name)} ${this._capitalizeWord(this._firstLastName)} ${this._capitalizeWord(this._secondLastName)}`;
    }

    getFullNameReverse() {
        return `${this._capitalizeWord(this._firstLastName)} ${this._capitalizeWord(this._secondLastName)} ${this._capitalizeWord(this._name)}`;
    } 

    _capitalizeWord(word) {
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
}