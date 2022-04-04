/* 
고차함수란 함수가 다른 함수를 매개변수로 받아서 어떤 로직을 생성하는 함수를 만한다. 
일급 객체는 다음과 같은 3가지 성질을 만족하는 함수를 뜻한다.
1. 변수나 매서드에 함수를 할당할 수 있어야 한다.
2. 함수 안에 함수를 매개변수로 담을 수 있어야 한다.
3. 함수가 함수를 반환할 수 있어야 한다. 
=> 자바스크립트에서의 함수는 일급 객체 함수임
*/

console.group("map");
const a = (a) => {
  return a + 10;
};
const b = [1, 2, 3].map(a);
console.log(b);
console.groupEnd("map");
// 함수 a를 통해 배열의 값을 바꿔 새로운 함수 생성

console.group("_call");
// 함수를 실행하여 반환
const _call = (a, b) => a() + b();

// 함수를 반환하는 함수
const d = (val) => () => val;
console.groupEnd("_call");
