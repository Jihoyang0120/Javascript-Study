// 블록 단위로 스코프 정의 가능

if (ture) {
  var functionScopeValue = "global";
  let blockScopeValue = "local";
}

console.log(functionScopeValue);
console.log(blockScopeValue); // Reference Error
