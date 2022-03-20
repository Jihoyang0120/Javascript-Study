const func1 = (e, index) => {
  console.log(`${index}번째 요소는 ${e}입니다. `);
};
const func3 = (prev, curr, index) => prev + curr;
const func4 = (e) => e % 2;

const a = [1, 2, 3, 4, 5].forEach(func1);
/* forEach는 배열에서 그 안에 있는 요소를 이용하여 변경시킬 때 사용된다. (배열 생성X) */
console.log(a);
// forEach는 반환 값이 없다.
const b = [1, 2, 3, 4, 5].map((e, index) => e * index);
/* map은 배열을 이용해 새로운 배열을 만들 때 사용된다. (배열 생성 O) */
console.log(b);
const c = [1, 2, 3, 4, 5].reduce(func3);
/* reduce는 배열을 통해 하나의 계싼된 값을 추출해낼 때 사용된다. */
console.log(c);
const d = [1, 2, 3, 4, 5].filter((e) => e % 2);
/* filter은 배열을 이용해 조건에 맞는 원소로 배열을 만들 때 사용된다. (배열 생성 O) */
console.log(d);
