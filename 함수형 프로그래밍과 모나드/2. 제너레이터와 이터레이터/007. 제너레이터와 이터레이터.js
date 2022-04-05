/* 
제너레이터/ 이터레이터
- 제터레이터: 이터레이터이자 이터러블을 생성하는 함수
*/

function* gen() {
  yield 1;
  if (false) yield 2;
  yield 3;
  return 100; // return 값도 생성 가능
}
let iter = gen();
log(iter[Symbol.iterator]); // [Symbol.iterator]() {[native code]}
log(iter[Symbol.iterator]() == iter); // true
log(iter.next()); // {value: 1, done: false}
log(iter.next()); //
log(iter.next()); // {value: 3, done: false}
log(iter.next()); // {value: 100, done: true}

for (const a of gen()) log(a); // 1 2 3
