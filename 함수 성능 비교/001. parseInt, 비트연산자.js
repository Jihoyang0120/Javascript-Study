/* parseInt */
for (let i = 0; i < 10000; i++) {
  let a = 123.456789;
  b = parseInt(a);
}

/* 비트연산자 */
for (let i = 0; i < 10000; i++) {
  let a = 123.456789;
  b == ~~a;
}

// => 비트연산자가 parseInt보다 대략 88% 빠름
