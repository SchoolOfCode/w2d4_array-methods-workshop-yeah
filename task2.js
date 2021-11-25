let animals = [
  "baboon",
  "kangaroo",
  "rhino",
  "frog",
  "beaver",
  "horse",
  "basalisk",
];

function startB(letter) {
  let firstLetter = letter.charAt(0);
  //console.log(firstLetter);

  return firstLetter === "b";
}

let bListAnimals = animals.filter(startB);
console.log(bListAnimals);

// You have an array of lovely animals. However, you can only keep the animals that start with the letter `b`.

// 👉 2a. In the new variable `bListAnimals`, use the `.filter()` method to generate a new array which contains only the animals whose name begins with 'b'.
