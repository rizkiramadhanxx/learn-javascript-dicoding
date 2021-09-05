// Expression Function
const greeting = function (name) {
  return `Hello ${name}`;
};
// Function
function multiply(a, b) {
  return a * b;
}
// Argument
multiply(1, 2);

// Destructuring object di function
const user = {
  id: 24,
  displayName: "kren",
  fullName: "Kylo Ren",
};

function introduce({ displayName, fullName }) {
  return `${displayName} is ${fullName}`;
}
// console.log(introduce(user));

// Default Parameters
function exponentsFormula(baseNumber, exponent = 2)//nilai default 2
 {
  let result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}
// exponentsFormula(2); // Hanya menggunakan 1 argument jadi params ke-2 undeifined

// Rest Parameter 
function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}

console.log(sum(1,2,4));

// Test
// console.log(greeting("andi"));
