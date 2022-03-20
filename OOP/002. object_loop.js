let foodArray = ["bacon", "pasta", "salad"];

console.group("Array loop");
let i = 0;
while (i < foodArray.length) {
  console.log(i, foodArray[i]);
  i += 1;
}
console.groupEnd("array loop");

let foodObject = {
  breakfast: "bacon",
  lunch: "pasta",
  dinner: "salad",
};

console.group("Object loop");
for (let name in foodObject) {
  console.log(name, foodObject[name]);
}
