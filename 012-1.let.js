let value = "바깥값";

// let은 선언이 이루어지는 라인까지 일시적으로 접근을 막는다.
// if 안에 있는 console.log는 variable value로의 접근이 불가하여, Reference Error을 던진다.
if (true) {
  console.log(value);
  let value = "안쪽값";
}
