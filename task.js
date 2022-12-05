const todayYear = new Date().getFullYear();

class Employee {
    constructor(fullName, phoneNum, position, education, yearOfEmployment, yearOfDismissal) {
        this.fullName = fullName
        this.phoneNum = phoneNum
        this.position = position
        this.education = education
        this.yearOfEmployment = yearOfEmployment
        this.yearOfDismissal = yearOfDismissal
    }

    get position() {
        return this._position
    }
    set position(value) {
        if (['Manager', 'JSDeveloper', 'SoftTester', 'UserExpDesigner'].includes(value)) this._position = value
        else this._position = false
    }

    get yearOfEmployment() {
        return this._yearOfEmployment
    }
    set yearOfEmployment(value) {
        if (value > todayYear) this._yearOfEmployment = false
        else this._yearOfEmployment = value
    }

    get yearOfDismissal() {
        return this._yearOfDismissal
    }
    set yearOfDismissal(value) {
        if (value < this._yearOfEmployment) this._yearOfDismissal = false
        else this._yearOfDismissal = value
    }
}

const employee1 = new Employee('John Brown', '+001578369320', 'SoftTester', 'Software engineering', 2018, 2020); 
const employee2 = new Employee('Jacob Smith', '+002924590124', 'PythonDeveloper', 'Software engineering', 2027, 2025); 

console.log(employee1)
console.log(employee2)
