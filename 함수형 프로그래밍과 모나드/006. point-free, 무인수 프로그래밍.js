const { map, filter, pipe, values, go } = require("fxjs");
const L = require("fxjs");

const animals = [
  {
    name: "토끼",
    do: "당근먹기",
  },
  {
    name: "코알라",
    do: "매달리기",
  },
  {
    name: "사자",
    do: "잠자기",
  },
  {
    name: "늑대",
    do: "울기",
  },
];

const t = animals.map((e) => (e.do === "잠자기" ? e : null)).filter((e) => e);
const prop = (key) => (obj) => obj[key];
const propEqual = (value) => (key) => (obj) => prop(key)(obj) === value;
console.log(t);
const t2 = go(animals, L.filter(propEqual("잠자기")("do")), L.takeAll);
console.log(t2);

/*
1. map을 통해 함수 집어넣기
2. do라는 key에 대항하는 value가 "잠자기"라면 원래의 요소를 반환하고, 아니라면 null 반환.
3. 이후 filter을 통해 null이라면 Boolean 값으로 false가 되므로 null 값에 해당하는 요소는 filter로 걸러지게 된다.
*/
