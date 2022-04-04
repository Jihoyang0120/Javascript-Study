/* 
함수형 프로그래밍에서 중요한 점은 최대한 원래의 변수가 그대로 있어야 한다는 점이다.
*/

const a = [1, 2, 3, 4, 5];
let b = a.slice(1);
console.log(a, b);
b = a.splice(1);
/* 
splice를 사용했더니 기존의 배열이 파괴된다. = 비순수함수
비순수함수 = [reverse, sort, fill, pop, push, shift, unshift, splice]
*/
console.log(a, b);
