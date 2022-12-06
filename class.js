const todayYear = new Date().getFullYear();

class Employee {
    constructor(name, phoneNumber, position, education,  firstWorkingYear, yearOfRelease) {
        this.name = name
        this.phoneNumber = phoneNumber
        this.position = position
        this.education = education
        this.firstWorkingYear = firstWorkingYear
        this.yearOfRelease = yearOfRelease
    }

    get position() {
        return this._position
    }
    set position(value) {
        if (['ProjectManager', 'Designer', 'TeamLead', 'BusinessAnalyst'].includes(value)) this._position = value
        else this._position = false
    }

    get firstWorkingYear() {
        return this._firstWorkingYear
    }
    set firstWorkingYear(value) {
        if (value > todayYear) this._firstWorkingYear = false
        else this._firstWorkingYear = value
    }

    get yearOfRelease() {
        return this._yearOfRelease
    }
    set yearOfRelease(value) {
        if (value < this._yearOfRelease) this._yearOfRelease = false
        else this._yearOfRelease = value
    }
}

const employee1 = new Employee('Jason Walley', '+380689747653', 'TeamLead', 'Software engineering', 2019, 2021); 
const employee2 = new Employee('Sara Switt', '+380765849254', 'PythonDeveloper', 'Software engineering', 2021, 2022); 

console.log(employee1)
console.log(employee2)
