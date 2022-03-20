let kim = {
  name: "kim",
  first: 10,
  second: 20,
};

let lee = {
  name: "lee",
  first: 10,
  second: 10,
};
lee.__proto__ = kim;

function sum() {
  return this.first + this.second;
}

sum.call();
/*
sum.call() === sum()
call()의 첫번째 인자는: 함수의 내부에 있는 this값을 누구로 할지에 대한 값.
call()의 두번째 인자는: 함수의 파라미터에 들어갈 인자값
*/
console.log("sum.call(kim)", sum.call(kim)); // this => kim
console.log("sum.call(lee)", sum.call(lee)); // this => lee

sum2 = function (value) {
  return value + (this.first + this.second);
};

sum2.call();
/*
sum.call() === sum()
call()의 첫번째 인자는: 함수의 내부에 있는 this값을 누구로 할지에 대한 값.
call()의 두번째 인자는: 함수의 파라미터에 들어갈 인자값
*/
console.log(sum2.call(kim, "value ")); // this => kim, value => "value "
console.log(sum2.call(lee, "value ")); // this => lee, value => "value "

let KimSum = sum2.bind(kim, "-> ");
/* 
함수의 내부적으로 this의 값을 영구적으로 바꾸는 새로운 함수 생성(return)
(함수의 내부에 있는 this를 kim으로 하는 새로운 함수 생성)
*/
console.log("KimSum", KimSum());
