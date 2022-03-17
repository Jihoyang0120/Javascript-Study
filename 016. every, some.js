const numbers = [1, 2, 3, 5, 7];
const isAllOdd = numbers.every((e) => e % 2);
/* 모든 조건을 만족하면 true 반환*/
const isSomeOdd = numbers.some((e) => e % 2);
/* 하나의 조건만 만족하면 true 반환*/

console.log(isAllOdd, isSomeOdd);
