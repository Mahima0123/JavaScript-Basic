const button = document.querySelector("button");

button.addEventListener("click", greet);

function greet(){
    const name = prompt("Enter your name here");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to meet you!!`
}