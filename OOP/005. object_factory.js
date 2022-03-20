// new: 객체를 생성(return)하는 생성자가 된다. (constructor)
console.log("Person()", new Person());

let d1 = new Date("2019-04-10");
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth());

function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

let kim = new Person("kim", 10, 20, 30);

let lee = new Person("lee", 10, 10, 10);

let yang = new Person("yang", 10, 20, 40);

console.log("lee.sum()", lee.sum());
console.log("kim.sum()", kim.sum());
console.log("yang.sum()", yang.sum());
