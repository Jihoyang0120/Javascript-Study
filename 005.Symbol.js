const symbol = Symbol();
const hello = Symbol("Hello");

console.log(Number(3) === Number(3));
console.log(Symbol("symbol") === Symbol("symbol"));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

// Symbol은 object의 key로 사용할 수 있다. (Symbol에 대한 reference를 variable에 미리 담고 있어야 된다.)
const nationality = Symbol("nationality");
const user = {
  name: "jay",
};

user[nationality] = "South Korea";
console.log(user[nationality]);

// Symbol이 객체의 key로 사용되면 for-in loop로 가져올 수 없다.
for (let key in user) {
  console.log(key);
}

// Object.key를 통해서도 가져올 수 없다. getOwnPropertySymbol을 통해서만 가져올 수 있다.
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(Object.toString(user));

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);
