/*
 이터러블은 일반적으로 어떤 요소들을 순회하며 쉽게 탐색할 수 있는 자료구조.
 => 이터러블 프로토콜 규칙을 준수한 객체 in Javascript

규칙이란?
어떤 객체가 Symbol, iterator 매서드를 가짐을 뜻한다.
그 매서드는 next()라는 매서드를 가지고 있는 객체를 반환하고 next() 매서드는 value와 done 프로퍼티를 가지고 있는 객체를 반환.
=> 대표적으로 배열은 Symbol, iterator를 가지고 있음.
 */

const a = ["사과", "딸기", "포도", "배"];
console.log(Symbol.iterator in a);
for (const b of a) console.log(b);

let mp = new Map();
mp.set("사과", "딸기");
mp.set("포도", "배");
console.log(mp.get("사과"));
for (const a of mp) console.log(a);
console.log(Symbol.iterator in mp);

const fruit = ["사과", "딸기", "포도", "배"];
const it = fruit[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
