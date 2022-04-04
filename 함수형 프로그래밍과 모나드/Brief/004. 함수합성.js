const R = require("ramda");
const f_1 = R.map((a) => a + 1);
const f_2 = R.filter((a) => a % 2);
const ret = f_2(f_1([1, 2, 3, 4]));
console.log(ret);

const ret1 = R.compose(Math.abs, R.add(1), R.multiply(2))(-4);
console.log(ret1);
/* R.compose는 오른쪽에서 왼쪽으로 로직이 흐른다. |-4 *2+1|*/

const f = R.pipe(R.negate, R.inc);
console.log(f(3));
/* R.pipe는 왼쪽에서 오른쪽으로 로직이 흐른다. 3 * -1 + 1*/
