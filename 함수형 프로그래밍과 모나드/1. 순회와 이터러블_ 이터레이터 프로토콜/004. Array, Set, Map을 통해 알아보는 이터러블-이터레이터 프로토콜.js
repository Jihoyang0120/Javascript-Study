// Array를 통해 알아보기

const arr = [1, 2, 3];
let iter1 = arr[Symbol.interator]();
for (const a of arr) log(a);

// Set을 통해 알아보기

const set = new Set[(1, 2, 3)]();

for (const a of set) log(a);

// Map을 통해 알아보기
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const a of map.keys()) log(a);
for (const a of map.values()) log(a);
for (const a of map.entries()) log(a);

/*
- 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값
- 이터레이터: {value, done } 객체를 리턴하는 next() 를 가진 값
- 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함게 동작하도록한 규약
*/
