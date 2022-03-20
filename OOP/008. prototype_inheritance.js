let superObj = { superVal: "super" };
let subObj = { subVal: "sub" };
subObj.__proto__ = superObj;
console.group("__proto__");
console.log("subObj", subObj);
console.log("subObj.subVal", subObj.subVal);
console.log("subObj.superbVal", subObj.superVal);
// if subObj 안에 superVal? then __proto__를 통해 연결된 superVal?
subObj.superVal = "sub";
console.log("subObj", subObj);
console.log("subObj.superbVal", subObj.superVal);
console.log("superObj.superval", superObj.superVal);
console.groupEnd("__proto__");

console.group("Object.create");
let parentObj = { parentVal: "parent" };
let childObj = Object.create(parentObj);
childObj.childVal = "child";
console.log(childObj);
console.log("childObj.childVal", childObj.childVal);
console.log("childObj.parentVal", childObj.parentVal);
childObj.parentObj = "child";
console.log("parentObj.parentval", parentObj.parentVal);
console.groupEnd("Object.create");

let kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
console.log("kim.sum()", kim.sum());

let lee = Object.create(kim);
lee.name = "lee";
lee.first = 10;
lee.second = 30;
lee.avg = function () {
  return (this.first + this.second) / 2;
};
console.log(lee);

/*
let lee = {
  name: "lee",
  first: 30,
  second: 20,
  avg: function () {
    return (this.first + this.second) / 2;
  },
};
*/

console.log("lee.sum()", lee.sum());
console.log("lee.avg()", lee.avg());
