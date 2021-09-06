// Promise 1
function makeACake(...rawIngredients) {
  collectIngredients(rawIngredients)
    .then(makeTheDough)
    .then(pourDough)
    .then(bakeACake)
    .then(console.log);
}
/* Promise memiliki 3 kondisi :
 * Pending (Janji sedang dalam Proses)
 * Fullfilled (janji terpenuhi)
 * Rejected (Janji gagal terpenuhi)
 */

// Constructing Promise Object
// isCoffeeMakerReady = true;
// let janjian = new Promise((resolve, reject) => {
//   if (isCoffeeMakerReady) {
//     resolve("Kopi berhasil dibuat");
//   } else {
//     reject("Mesin kopi tidak bisa digunakan");
//   }
// });

// Promise then

// const stock = {
//   coffeeBeans: 250,
//   water: 1000,
// };

// const checkStock = () => {
//   return new Promise((resolve, reject) => {
//     if (stock.coffeeBeans >= 16 && stock.water >= 250) {
//       resolve("Stok cukup. Bisa membuat kopi");
//     } else {
//       reject("Stok tidak cukup");
//     }
//   });
// };

// const handleSuccess = (resolvedValue) => {
//   console.log(resolvedValue);
// };
// const handleFailure = (rejectionReason) => {
//   console.log(rejectionReason);
// };
// checkStock().then(handleSuccess, handleFailure);

// Catch for handle rejection

// checkStock().then(handleSuccess).catch(handleFailure);

// Chaining Promises

// const checkAvailability = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!state.isCoffeeMachineBusy) {
//         resolve("Mesin kopi siap digunakan.");
//       } else {
//         reject("Maaf, mesin sedang sibuk.");
//       }
//     });
//   }, 1000);
// };

// const state = {
//   stock: {
//     coffeeBeans: 250,
//     water: 1000,
//   },
//   isCoffeeMachineBusy: false,
// };

// function makeEspresso() {
//   checkAvailability()
//     .then((value) => {
//       console.log(value);
//       return checkStock();
//     })
//     .then((value) => {
//       console.log(value);
//       return brewCoffee();
//     })
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((rejectedReason) => {
//       console.log(rejectedReason);
//     });
// }

// Promise all
