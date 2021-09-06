//fungsi getCoffee

const getCoffee = () => {
  return new Promise((y, n) => {
    const seeds = 100;

    setTimeout(() => {
      if (seeds >= 10) {
        y("Kopi didapatkan");
      } else {
        n("Biji kopi habis");
      }
    }, 2000);
  });
};

// menggunakan then
function makeCoffee() {
  getCoffee().then((coffee) => {
    console.log(coffee);
  });
}
// makeCoffee();

// menggunakan await

async function makeCoffee2() {
  const coffee = await getCoffee();
  console.log(coffee);
}

// makeCoffee2();

// Handle onRejected using async-await

async function makeCoffee3() {
  try {
    const coffee = await getCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

// Chaining Promise using async-await
async function makeEspresso() {
  try {
    await checkAvailability();
    await checkStock();
    await Promise.all([boilWater(), grindCoffeeBeans()]);
    const coffee = await brewCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}
