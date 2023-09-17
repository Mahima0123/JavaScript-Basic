const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet();

//----------------------

const myDate = new Date(1195, 11, 17);
console.log(myDate.getYear());

myDate.getYear = function () {
    console.log("something else!");
};

myDate.getYear();


// using object.create

const personPrototype = {
    greet() {
        console.log("hello!!");
    },
};

const carl = Object.create(personPrototype);
carl.greet();

// using a constructor
const prototype = {
    greet() {
        console.log(`hello, my name is ${this.name}!`);
    },
};

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, prototype);


//object.assign

const mahima = new Person("Mahima");
mahima.greet();

//object.hasOwn()

const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name"));
console.log(Object.hasOwn(irma, "greet"));