// Destrucing Array

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
const [,,,makan1] = favorites;

// Assigment 
const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites1;
 
// Menukar nilai
let a = 1;
let b = 2;

// console.log("Sebelum swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// [a, b] = [b, a];

// console.log("Setelah swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// Test
console.log(firstFood);
console.log(makan1);
console.log(herFood);