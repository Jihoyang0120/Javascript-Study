/* 클로저란 외부함수의 실행 컨텍스트가 소멸해도 [[scope]] 프로퍼티가 가리키는 외부함수의 실행환경이 소멸하지 않고 참조할 수 있는 것을 말합니다. */

const { text } = require("express");

/* 클로저의 예(1) */
const test = (function () {
  let count = 0;
  return {
    increase() {
      count++;
    },
    decrease() {
      count--;
    },
    getValue() {
      console.log(count);
    },
  };
})();
test.increase();
test.increase();
test.increase();
test.getValue();

// Javascript에는 private 변수가 존재하지 않는다. 하지만 즉시 실행함수와 클로저를 이용해 private 변수를 구현할 수 있다. (getValue를 통해서만 count 값을 확인 가능)

/* 클로저의 예 (2) */
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();
console.log([add(), add(), add()]);

// 또한 counter 라는 변수가 어떤 행위에 이어서 실행될 수 있게 만든다. counter라는 변수는 내부함수에서 참조할 수 있는 클로저로 남이 있기에 계속 더하기가 가능.
