/* JSON.parse와 JSON.stringfy */

const a = {
  b: 1,
  c: {
    d: 2,
  },
};
let b = JSON.parse(JSON.stringify(a));
b.c.d = 4;
console.log(a);

/* 
객체를 문자열(JSON)로 만든 다음 다시 새로운 객체에 할당하는 방식.

재귀함수와의 성능차이는 별로 없는 듯

논외로, JSON value로는 Number, String, Boolean, Array, Object, null만 쓸 수 있음.
undefined을 value로 갖고 있는 객체는 직렬화되지 않음.
*/
