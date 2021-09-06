/*PromiseAll untuk menjalankan banyak promise 
sekaligus tanpa memedulikan urutan*/

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
  isCoffeeMachineBusy: false,
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

// Fungsi boilWater
const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Memanaskan air...");
    setTimeout(() => {
      console.log("Air Panas sudah siap");
    }, 2000);
  });
};
// Fungsi GrindCoffeeBeans
const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log("Menggiling biji kopi...");
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 1000);
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
      const promises = [boilWater(), grindCoffeeBeans()];
      return Promise.all(promises);
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
