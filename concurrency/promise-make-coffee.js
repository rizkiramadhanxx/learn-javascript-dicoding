// Fungsi cek ketersediaan
const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isCoffeeMachineBusy) {
        resolve("Mesin Kopi siap digunakan");
      } else {
        reject("Maaf, mesin rusak");
      }
    }, 1000);
  });
};
// Object state
const state = {
  stock: {
    coffeeBeans: 250,
    water: 1000,
  },
  isCoffeeMachineBusy: true,
};
// Fungsi checkStock

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeMachineBusy = true;
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
        resolve("Stok cukup. Bisa membuat kopi.");
      } else {
        reject("Stok tidak cukup!");
      }
    }, 1500);
  });
};

// Fungsi BrewCoffee
const brewCoffee = () => {
  console.log("Membuatkan kopi Anda...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 2000);
  });
};
// Promise Utama
function makeEspresso() {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      return brewCoffee();
    })
    .then((value) => {
      console.log(value);
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
    });
}

makeEspresso();
