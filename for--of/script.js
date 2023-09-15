//for...of loop
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal"];

for (const cat of cats) {
    console.log(cat);
}


/*
    Map ----> doing something to each item in a collection and create a new collection
                containing the changed items.
*/

function toUpper(string) {
    return string.toUpperCase();
}

const names = ["Mahima", "Manisha", "Amina", "Shreeey"];

const upperNames = names.map(toUpper);

console.log(upperNames);

/*
    Filter ----> test each item in a collection and create a new collection
                containing only the items that match.
*/

function lcity(city){
    return city.startsWith("N");
}

const cities = ["Nepal", "London", "India", "Korea"];

const filtered = cities.filter(lcity);

console.log(filtered);


// a compact way to write the above code:

const animals = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal","Lion"];

const filteredAnimals = animals.filter((animal) => animal.startsWith("L"));

console.log(filteredAnimals);


//Instead of for...of loop we can also directly use for loop.

const animal1 = ["Lion", "Tiger", "Panda", "Bear", "Dog"];

for (let i=0; i < animal1.length; i++){
    console.log(animal1[i]);
}


// for loop to examine the value of i

const pets = ["Pete", "Biggles", "Jasmine"];

let myFavouritePets = "My pets are called ";

for (let i = 0; i < pets.length; i++) {
    if (i === pets.length - 1) {
        myFavouritePets += `and ${pets[i]}.`;
    } else {
        myFavouritePets += `${pets[i]},`;
    }
}

console.log(myFavouritePets);