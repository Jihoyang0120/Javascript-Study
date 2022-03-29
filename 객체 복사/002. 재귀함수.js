/* 재귀함수 */

const copy = (o) => {
  let out = {};
  let value, key;
  for (key in o) {
    value = o[key];
    out[key] = typeof value === "object" && value != null ? copy(value) : value;
  }
  return out;
};

const a = {
  b: 1,
  c: {
    d: 2,
  },
};

let b = copy(a);
b.c.d = 4;
console.log(a);

/* 
copy가 재귀적으로 작동하면서 해당 value가 object임 && null이 아님을 검사.
객체가 만약에 또 있다면 재귀함수가 다시 작동되어 객체를 새로운 객체에 담음.
*/
