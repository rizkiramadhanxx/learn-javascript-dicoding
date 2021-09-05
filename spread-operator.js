// Spread for spreding array
const favorites = ["seafood","ayam goreng","sate goreng"];

// Spread to merge array
const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites1,others]; // masih berbentuk array didalam array
const allFavoritesWithSpread = [...favorites1,...others] 

// spread to merge object
const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };

// Test
// console.log(favorites);
// console.log(...favorites);
// console.log(allFavorites);
// console.log(allFavoritesWithSpread);
console.log(newObj);