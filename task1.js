const cats = ["tony", "daisy", "socks", "rockie"];

function turnsToUpperCase(catName) {
  // your code here
  return catName.toUpperCase();
}

console.log(turnsToUpperCase(cats[0]));

const capitalisedCats = cats.map(turnsToUpperCase);
console.log(capitalisedCats);
