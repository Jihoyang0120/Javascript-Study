// Basic CRUD method

let foodArray = ["bacon", "pasta", "salad"];
console.log("foodArray[1]:", foodArray[1]);

let foodObject = {
  breakfast: "bacon",
  lunch: "pasta",
  dinner: "salad",
};

foodObject.lunch = "oatmeal";
console.log("foodObject.breakfast:", foodObject.breakfast);
console.log("foodObject['lunch']:", foodObject["lunch"]);
delete foodObject.dinner;
console.log("foodObject.dinner:", foodObject.dinner);
