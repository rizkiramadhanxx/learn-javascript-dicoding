// Create Object
const user = {
  name: "Oji saputra",
  age: 19,
  species: "Human",
  "Hair Color": "Ikal",
};

// acces property
user["Hair Color"];
user.age;

// modify object
const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
  "is fly": true,
};

spaceship.color = "red";
spaceship.maxSpeed = 100; // add property
spaceship["is fly"] = false;

// Init Property to Variabel
spaceship1 = { name: "New Millenium Falcon" };

// Delete Property in Obj
const Kucing = {
  Bulu: "Kuning",
  Mata: "merah",
};
delete Kucing.Mata;

// Test

// console.log(user);
// console.log(`Halo nama saya ${user["Hair Color"]}`);
// console.log(`Halo nama saya ${user.age}`);
// console.log(spaceship1);
// console.log(Kucing)
