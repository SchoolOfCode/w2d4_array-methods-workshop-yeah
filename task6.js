const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

// 👉 6a. Using the .sort() method, rearrange the brooms (numbers) in the broomCupboard array so that they are in ASCENDING order, with broomstick 1 at index 0 and broomstick 10 and index 9.
broomCupboard.sort(function (a, b) {
  return a - b;
});

// 👉 6b. Using the .sort() method and the `shelf` property of each potions object, rearrange the four potions in the 'potions' array so they are in DESCENDING order of their shelves, with the 'draught of living death' at index 0 and the 'pepperup potion' at index 3.
potions.sort(function (a, b) {
  return b.shelf - a.shelf;
});

// 👉 6c. Sort the names in the array in alphebetical order according to their *last* name.
students.sort(function (a, b) {
  let aLast = a.split(" ")[1];
  let bLast = b.split(" ")[1];
  if (aLast < bLast) return -1;
  else if (aLast > bLast) return 1;
  return 0;
});
