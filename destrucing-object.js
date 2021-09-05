// destrucing object with object literal
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

// const {firstName,lastName,age} = profile;

// default value
const profile1 = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const { firstName, lastName, age, sex = "man" } = profile1; // jika nilai default kosong maka undefined
// Assigning to Different Local Variable Names
const profile2 = {
  firstName: "Oji",
  lastName: "Doe",
  age: 18,
};

const { firstName: namaDepan } = profile2;
// Test
console.log(firstName);
console.log(sex);
console.log(namaDepan);
