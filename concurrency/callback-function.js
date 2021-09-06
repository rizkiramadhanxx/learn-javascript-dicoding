// // Tanpa Callback

// const orderCoffe = () => {
//   let coffee = null;
//   console.log("sedang membuat kopi, silakan tunggu...");
//   setTimeout(() => {
//     coffee = "Kopi sudah jadi";
//   }, 3000);
//   return coffee;
// };

// with Callback

const orderCoffee = (callback) => {
  let coffee = null;
  console.log("Sedang membuat kopi, silakan tunggu...");
  setTimeout(() => {
    coffee = "Kopi sudah jadi!";
    callback(coffee);
  }, 3000);
};

orderCoffee((coffee) => {
  console.log(coffee);
});
