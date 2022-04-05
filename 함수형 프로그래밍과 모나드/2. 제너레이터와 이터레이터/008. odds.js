function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a == l) return;
  }
}

function* odd(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

let iter2 = odds(10);
log(iter2.next()); // {value:1, done: false}
log(iter2.next()); // {value:3, done: false}
log(iter2.next()); // {value:5, done: false}
log(iter2.next()); // {value:7, done: false}
log(iter2.next()); // {value:undefine, done: true}

for (const a of odds(40)) log(a); // 1, 3, 5, 7 .. 39
