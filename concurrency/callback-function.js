// const orderCoffe = () => {
//   let coffee = null;
//   console.log("sedang membuat kopi, silakan tunggu...");
//   setTimeout(() => {
//     coffee = "Kopi sudah jadi";
//   }, 3000);
//   return coffee;
// };

// const coffee = orderCoffe();
// console.log(coffee);

const orderCoffe = (callback) => {
  let coffee = null;
  console.log("Sedang membuat kopi, silakan tunggu...");
  setTimeout(() => {
    coffee = "Kopi sudah jadi";
    callback(coffee);
  }, 3000);
};
