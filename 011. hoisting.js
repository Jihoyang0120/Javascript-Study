hello();
hello2();

function hello() {
  console.log("Hi!");
}

// TypeError
var hello2 = function () {
  console.log("hi! ");
};
