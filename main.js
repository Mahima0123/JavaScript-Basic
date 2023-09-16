//while loop
const pets = ["Pete", "Biggles", "Jasmine"];
let myFavouritePets = "My pets are called ";

let i = 0;

while (i < pets.length) {
    if (i === pets.length -1){
        myFavouritePets += `and ${pets[i]}.`;
    } else {
        myFavouritePets += `${pets[i]},`;
    }

    i++;
}

console.log(myFavouritePets);

//do...while loop
const cats = ["abc", "cds", "qwe", "qwer", "asdf"];

let myFavouriteCats = "My cats are called ";

let i1 = 0;

do {
    if(i1 === cats.length - 1) {
        myFavouriteCats += `and ${cats[i1]}.`;
    } else {
        myFavouriteCats += `${cats[i1]}, `;
    }
    i1++;
} while(i1 < cats.length) ;

console.log(myFavouriteCats);