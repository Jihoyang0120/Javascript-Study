/*
자바스크립트는 객체를 함수를 통해 넘길 때 call by value의 형식을 취하기 때문에
메모리의 이점을 노리지 않는 이상은 깊은 복사를 통해 우너복 객체를 안전하게 복사하는게 좋다. 
*/

/*
 스프레드 연산자와 Object.assign (깊이가 1단계까지일 때 사용가능하다.)
*/

const a = { b: 1 };
let a1 = { ...a };
let a2 = Object.assign({}, a);
a1.b = 3;
a2.b = 3;
console.log(a);
console.log(a1);
console.log(a2);

/* 2단계 이상으로 깊은 객체에서는 원본 객체 a가 바뀌었다. */
const b = {
  b: 1,
  c: {
    d: 2,
  },
};
let b1 = { ...b };
let b2 = Object.assign({}, b);
b1.c.d = 3;
b2.c.d = 3;
console.log(b);
console.log(b1);
console.log(b2);
