// 블록 단위로 스코프 정의 가능

// 변하지 않는 값을 정의할 때는 대문자로 선언
const URL = "http://gogole.com";
URL = "http://gogole.com"; // can not modify constant variable.

if (true) {
  const URL2 = "http://gogole.com";
}

console.log(URL2);
