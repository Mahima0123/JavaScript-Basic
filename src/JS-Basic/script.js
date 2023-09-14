const song = "Fight the Youth";
const score = 9;
const highestScore = 10;

const output = `I like the song ${song}. I gave it a score of ${(score/highestScore) * 100}%.`;

console.log(output);
const name = "Mahima";
if (name.startsWith("Ma")){
    console.log("Found");
} else {
    console.log("Not Found");
}

const statement = "Hello, My name is Mahima Chaudhary and Hello I am new here."

console.log(statement.indexOf("Hello"));

const firstOccur = statement.indexOf("Hello");
const secondOccur = statement.indexOf("Hello", firstOccur + 1);

console.log(firstOccur);
console.log(secondOccur);

console.log(statement.slice(7));
console.log(statement.toUpperCase());

const updated = statement.replace("Mahima", "Manita");
console.log(updated);



//Array

const shopping = ["braed", "milk", "Cheese", "Butter"];
shopping.push("Momo", "Chowmin");


shopping.unshift("Food: ")
shopping.pop();
console.log(shopping);


const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("liverpool");

if (index !== -1){
    cities.splice(index, 2);
}

console.log(cities);



const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds){
    console.log(bird);
}


function isLong(city){
    return city.length > 8;
}

const cities1 = ["London", "Liverpool", "Totness"];
const longer = cities1.filter(isLong);
console.log(longer);