/* 
1. Constructor sets the initial setting of object
2. Use name() instead of name = function()
3. Prototype and adding function outside of class are available
4. Adding additional setting and method from existing class by extends
*/

class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}

class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }
  sum() {
    return super.sum() + this.third;
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

let kim = new PersonPlus("Kim", 10, 20, 30);

console.log("kim", kim);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
