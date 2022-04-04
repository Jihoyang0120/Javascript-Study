/* 순수함수는 동일한 입력을 받아서 동일한 출력을 하는 것을 의미하며, 참조 투명성의 성질을 갖는다.  */

const b = 1;
const pure = (a, b) => {
  return a + b;
};

const not_pure = (a) => {
  return a + b;
};

console.log(pure(1, 3));
console.log(not_pure(1));

/* 
함수형 프로그래밍에서 전역변수를 사용할 때의 주의할점

1. 최대한 지역변수 만을 사용해 구현한다.
2. 인수로 넘기는 값의 본체까지 수정하지 않는다.
3. 매개변수로 넘기는 값이 객체라면 원본 객체에 변이를 일으키지 않기 (깊은 복사)

*/

let c = 0;

// 나쁜 예: 매개변수로 반지도 않고 전역변수를 변환하고 반환한다.
const bad_f = () => {
  return c++;
};
bad_f();
console.log(c);

const f = (c) => c + 1;
// 좋은 예: 매개변수로 받아 +1를 한다.
