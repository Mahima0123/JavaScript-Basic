function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}

//reusing the defination as many times as you need.

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();

const Mahima = createPerson("Mahima");
Mahima.name;
Mahima.introduceSelf();



// ------Another way---------

function Person(name) {
    this.name = name;
    this.introduceYourself = function () {
        console.log(`Hi!! I'm ${this.name}.`);
    };
}

const abc = new Person("abc");
abc.name;
abc.introduceYourself();
