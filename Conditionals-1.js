
const prompt = require("prompt-sync")();


let age = parseInt(prompt("Enter your age: "));

if (age >= 50) {
    console.log("You qualify for the senior discount!");
} else if (age < 16) {
    console.log("You're not old enough to drive yet.");
}

let user_name = prompt("Enter your name: ");

if (user_name === "Mr. J") {
    console.log("🐠");
}
if (user_name.length > 7) {
    console.log("You have a long name.");
}


let name_length = parseInt(prompt("How many characters is your name? "));

if (name_length === user_name.length) {
    console.log("That's correct! ✔️");
} else if (name_length > user_name.length) {
    console.log("Too high ✖️");
} else {
    console.log("Too low ✖️");
}

if (age % 2 === 0) {
    console.log("Your age is an even number.");
} else {
    console.log("Your age is an odd number.");
}
