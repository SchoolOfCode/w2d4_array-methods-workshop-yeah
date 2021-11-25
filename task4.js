// 👉 4a. Using the `.every()` method, check that every number in the `sevenTimesTable` array is a multiple of `7`.

// 👉 4b. Check if every number in the `seventySevenTimesTable` array is a multiple of `77` using the `.every()` method.

// 👉 4c. Your worst fears have been confirmed. The result of step 4b showed you that there is a rogue value in your `seventySevenTimesTable` array. Use the `.find()` method to identify which number it is.

// 👉 4d. Now that you know which number is incorrect, use the `.findIndex()` method to identify the index of the number.

let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

// Task 4a
function isMultipleOfSeven(number) {
  return number % 7 === 0;
}
let multipleOfSeven = sevenTimesTable.filter(isMultipleOfSeven);
console.log(multipleOfSeven);

// Task 4b
function isMultipleOfSeventySeven(number) {
  return number % 77 === 0;
}

let multipleOfSeventySeven = seventySevenTimesTable.filter(
  isMultipleOfSeventySeven
);
console.log(multipleOfSeventySeven);

// Task 4c

function findMultipleOfSeventySeven(number) {
  return number % 77 !== 0;
}

let findSeventySeven = seventySevenTimesTable.find(findMultipleOfSeventySeven);
console.log(findSeventySeven);

// Task 4d
let findIndexSeventySeven = seventySevenTimesTable.findIndex(
  findMultipleOfSeventySeven
);
console.log(findIndexSeventySeven);
