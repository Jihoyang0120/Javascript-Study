/* 
어떤 함수의 예상되는 여러 개의 매개변수보다 적은 수의 매개변수를 받아서 매개변수가 완전히 채워지지 않는 함수가 실행되지 않고 넘겨지다가 모든 매개변수가 채워지면 그때서야 실행되는 기법이다.
이로인해 조금 더 유연한 함수 합성과 무인수프로그래밍이 가능해진다.
*/

const R = require("ramda");
const a = R.add(1);
const b = a(2);
console.log(b);

const addFourNumbers = (a, b, c, d) => {
  a + b + c + d;
};
const curriedAddFourNumbers = R.curry(addFourNumbers);
const f = curriedAddFourNumbers(1, 2);
const g = f(3);
g(4);

/* 커스텀 커링 */
const curry = (fn) => (a) => (b) => fn(a, b);
