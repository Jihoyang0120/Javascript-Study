console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random()); // method: 객체에 소속되어있는 함수
console.log("Math.floor(3.9)", Math.floor(3.9));

let MyMath = {
  PI: Math.PI,
  randomInt: function () {
    return Math.floor(Math.random() * 10);
  },
};

console.log("MyMath.randomInt()", MyMath.randomInt());

MyMath_PI = Math.PI;
console.log("MyMath_PI", MyMath_PI);
const MyMath_floor = (val) => Math.floor(val);
console.log("MyMath_floor(10.23)", MyMath_floor(10.23));
