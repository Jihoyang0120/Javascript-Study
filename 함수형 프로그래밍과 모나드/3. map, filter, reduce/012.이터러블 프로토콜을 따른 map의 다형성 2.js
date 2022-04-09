let m = new Map();
m.set("a", 10);
m.set("b", 20);
const iter = m[Symbol.iterator]();
log(it.next());
log(it.next());
log(it.next());
log(it.next());

log(map(([k. a]) => [k, a * 2], m));