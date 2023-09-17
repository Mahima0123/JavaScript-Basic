class Person {
    name;

    constructor(name) {
        this.name = name;
    }
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

const giles = new Person("Giles");
giles.introduceSelf();

class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }
    introduceSelf() {
        console.log(
            `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
        );
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf();

walsh.grade("my paper here");

// omiting constructors
class Animal {
    sleep() {
        console.log("zzzzzzzzz");
    }
}

const spot = new Animal();
spot.sleep();

// encapsulation
class student extends Person {
    #year;

    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf(){
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}`);
    }

    canStudyArchery() {
        return this.#year > 1;
    }

}

//private methods
class abc {
    somePublicMethod() {
        this.#somePrivateMethod();
    }

    #somePrivateMethod() {
        console.log("You called me?");
    }
}

const myAbc= new abc();
myAbc.somePublicMethod();
//myAbc.#somePrivateMEthod(); -------> syntax error