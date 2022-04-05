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

log(...odds(10)); // 1, 3, 5, 7, 9
log([...odds(10), ...odds(20)]); // [1, 3, 5, 7, 9 .. 19]

const [head, ...tail] = odds(5);
log(head); // 1
log(tail); // [3, 5]

const [a, b, ...rest] = odds(10);
log(a); // 1
log(b); // 3
log(rest); // [5,7,9]
