const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 20000 },
  { name: "셔츠", price: 30000 },
];

// sample code without map
let names = [];
for (const a of products) {
  name.push(p.name);
}
log(names);

let prices = [];
for (const a of products) {
  price.push(p.price);
}
log(prices);

// sample code with map
/* 
함수형 프로그래밍에서는 인자와 return 값으로 소통하는걸 권장
log(names) => return (res)
인자: iter (인자 값이 이터러블 프로토콜을 따른다는걸 명시)
*/
const map = (f, iter) => {
  let res = [];
  for (const a of products) {
    res.push(f(a));
  }
  return res;
};

map((p) => p.name, products); // ["반팔티", "긴팔티", "케이스", "후드티", "바지", "셔츠"]
