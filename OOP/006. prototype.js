// new: 객체를 생성(return)하는 생성자가 된다. (constructor)

function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

Person.prototype.sum = function () {
  return this.first + this.second + this.third;
};

let kim = new Person("kim", 10, 20, 30);

kim.sum = function () {
  return "this : " + (this.first + this.second);
};

let lee = new Person("lee", 10, 10, 10);

console.log("kim(sum)", kim.sum());
console.log("lee(sum)", lee.sum());
