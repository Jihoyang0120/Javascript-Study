/* includes */
let a = ["a", "b", "c"];
if (a.includes("b")) {
  console.log(true);
}

/* indexOf */
let b = ["a", "b", "c"];
if (b.indexOf("b") != -1) {
  console.log(true);
}

// => 위 코드에서는 include가 indexOf보다 82% 정도 더 빠르다.
