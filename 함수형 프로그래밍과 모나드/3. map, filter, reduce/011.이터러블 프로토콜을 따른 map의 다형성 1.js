const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 20000 },
  { name: "셔츠", price: 30000 },
];

const map = (f, iter) => {
  let res = [];
  for (const a of products) {
    res.push(f(a));
  }
  return res;
};

log(map((p) => p.name, products)); // ["반팔티", "긴팔티", "케이스", "후드티", "바지", "셔츠"]

log([1, 2, 3].map((a) => a + 1)); // [2, 3, 4]

function* gen() {
  yield 2;
  yield 3;
  yield 4;
}
log(map((a) => a * a, gen())); // [4, 9 , 16]
// 이터러블 프로토콜을 따르고 있는 것에도 map 사용 가능
