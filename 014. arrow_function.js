//before - ES5

function a() {
  return 1;
}

// after - ES6
const a_ES6 = () => 1;

console.log(a());
console.log(a_ES6());

/* 기본 매개변수 */

const b = (c = 2) => {
  return c;
};

console.log(b());

/* Arrow function & setTimeout binding
화살표 함수가 아닌 기본 함수는 setTimeout이 실행될 때의 브라우저의 백그라운드 공간에서 실행되며, this는 그 호출된 곳에서 바인딩된다.
*/
function arrow() {
  setTimeout(() => {
    console.log(this); // arrow {}
  }, 1000);
}

function not_arrow() {
  setTimeout(function () {
    console.log(this);
  }, 1000);
}

const p1 = new not_arrow();
const p2 = new arrow();
