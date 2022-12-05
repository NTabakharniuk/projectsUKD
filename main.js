// 1.Cтворити 3 класи, які описують різні бренди телефонів
// 2. Додати до кожного класу можливість динамічно встановлювати значення властивостей класу використовуючи конструктор
class Iphone {
    constructor() {
        this.color = 'white';
        this.yearOfCreation = "2019";
        this.memory = 64;
        this.brand = 'Apple';
    }
}

class Samsung {
    constructor() {
        this.color = 'gray';
        this.yearOfCreation = "2018";
        this.memory = 128;
        this.brand = 'Samsung';
    }
} 

class Xiaomi {
    constructor() {
        this.color = 'green';
        this.yearOfCreation = "2020";
        this.memory = 256;
        this.brand = 'Xiaomi';
    }
}

// 3.Створення батьківського класу таким чином, щоб класи з пункту 1 наслідували цей батьківський клас і використовували його властивості и методи
class Phone {
    constructor(yearOfCreation, memory, color){
        this.color = color;
        this.yearOfCreation = yearOfCreation;
        this.memory = memory;
    }
}
class Iphone extends Phone {
    constructor(yearOfCreation, memory, color){
        super(yearOfCreation, memory, color);

        this.brand = 'Apple';
    }
}

class Samsung extends Phone {
    constructor(yearOfCreation, memory, color){
        super(yearOfCreation, memory, color);

        this.brand = 'Samsung';
    }
} 

class Xiaomi extends Phone {
    constructor(yearOfCreation, memory, color){
        super(yearOfCreation, memory, color);

        this.brand = 'Xiaomi';
    }
}

const iPhone = new Iphone(2019, 64, 'white')
console.log(iPhone);

const samsung = new Samsung(2020, 128, 'grey')
console.log(samsung);

const xiaomi = new Xiaomi(2021, 256, 'green')
console.log(xiaomi);

// 4.Додала методи для обчислення віку і вартості телефону
class Phone {
    constructor(yearOfCreation, memory, color){
        this.color = color;
        this.yearOfCreation = yearOfCreation;
        this.memory = memory;
    }
}
class Iphone extends Phone {
    constructor(yearOfCreation, memory, color){
        super(yearOfCreation, memory, color);

        this.brand = 'Apple';
    }

    calculatePrice() {
            return (this.yearOfCreation * this.memory) / 1000;
    }

    calculateAge() {
        return(2022 - this.yearOfCreation)
    }
    getDescription() {
        return `The ${this.brand} is ${(iPhone.calculateAge())} year old  and costs ${(iPhone.calculatePrice(true))}$`
    }
}

class Samsung extends Phone {
    constructor(yearOfCreation, memory, color){
        super(yearOfCreation, memory, color);

        this.brand = 'Samsung';
    }

    calculatePrice() {
                return (this.yearOfCreation * this.memory) / 1000;
    }
    calculateAge() {
        return(2022 - this.yearOfCreation)
    }
    getDescription() {
        return `The ${this.brand} is ${(samsung.calculateAge())} years old  and costs ${(samsung.calculatePrice(true))}$`
    }
} 

class Xiaomi extends Phone {
    constructor(yearOfCreation, memory, color){
        super(yearOfCreation, memory, color);

        this.brand = 'Xiaomi';
    }

calculatePrice() {
        return (this.yearOfCreation * this.memory) / 1000;
}
calculateAge() {
    return(2022 - this.yearOfCreation)
}
getDescription() {
    return `The ${this.brand} is ${(xiaomi.calculateAge())} years old  and costs ${(xiaomi.calculatePrice(true))}$`
}
}


const iPhone = new Iphone(2021, 524, 'white')
console.log(iPhone.getDescription());

const samsung = new Samsung(2020, 128, 'grey')
console.log(samsung.getDescription());

const xiaomi = new Xiaomi(2018, 256, 'green')
console.log(xiaomi.getDescription());


////*
class Phone{
    constructor(model, year, color, ram){
    this.color = color;
    this.yearOfCreation = yearOfCreation;
    this.memory = memory;
    this.brand = brand;
    }
    //модель
    get brand(){
        this._brand = brand;
    }
    set brand(brand){
        this._brand = 'Apple'
    }
    //рік
    get yearOfCreation(){
        this._yearOfCreation = yearOfCreation;
    }
    set yearOfCreation(yearOfCreation){
        this._yearOfCreation = 2020
    }
    //кол
    get color(){
        this._color = color;
    }
    set color(color){
        this._color = 'pink'
    }
    //пам'ять
    get memory(){
        this._memory = memory;
    }
    set memory(memory){
        this._memory = 256
    }
}
let phone = new Phone()
console.log(phone)
