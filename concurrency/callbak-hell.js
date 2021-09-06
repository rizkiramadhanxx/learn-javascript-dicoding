function makeACake(...rawIngredients) {
  collectIngredients(rawIngredients, function (ingredients) {
    makeTheDough(ingredients, function (dough) {
      pourDough(dough, function (pouredDough) {
        bakeACake(pourDough, function (cake) {
          console.log(cake);
        });
      });
    });
  });
}
