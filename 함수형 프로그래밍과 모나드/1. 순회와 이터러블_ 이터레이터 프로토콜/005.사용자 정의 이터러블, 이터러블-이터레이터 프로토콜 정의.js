// 사용자 정의 이터러블을 통해 알아보기

// well-formed iterator
const iterable = {
  [Symbol.interator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

// 이터러블을 넣어서 순회를 해도 순회가 가능해서 well-formed iterator
let iterator = iterable[Symbol.iterator]();
for (const a of iterable) log(a);

const arr2 = [1, 2, 3];
let iter2 = arr2[Symbol.iterator]();
iter2.next();
log(iter2[Symbol.iterator]() == iter2);
for (const a of arr2) log(a);

// 브라우저 안에서도 이터러블-이터레이터 개념이 들어가있음
for (const a of document.querySelectorAll("*")) log(a);
const all = document.querySelectorAll("a");
let iter3 = all[Symbol.iterator]();
log(iter3.next());
log(iter3.next());
log(iter3.next());
