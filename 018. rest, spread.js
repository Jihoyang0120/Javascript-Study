/* 배열 통합 */
const a = [1, 2, 3];
const b = [4, 5, 6];

const c = [...a, ...b];
console.log(c);

/* Max 함수 매개변수로 집어넣기 */
const a1 = [1, 2, 3, 4];
console.log(Math.max(...a1));

/* 객체 복사 */
const original = { name: "양지호", age: 22 };
const copy = { ...original, height: 175 };
console.log(copy);

/* Swap */
let one = 1;
let two = 2;
[one, two] = [two, one];
console.log(one, two);

/* Array */
const d = () => [1, 2, 3, 4];
const [q, w, e] = d();
console.log(q, w, e);

/* Object */
const obj = () => ({ name: "양지호", job: "Student" });
const { name } = obj();
console.log(name);

const arr = [1, 2];
const [element1, element2] = arr;
console.log(element1, element2);

const obj2 = { myName: "양지호", talent: "game" };
const { myName, talent } = obj2;
console.log(myName, talent);
