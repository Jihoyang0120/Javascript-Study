const a = [1,2]
a[Symbol.iterator] = null
log([...a, ...[3,4]]) // a is not iterable
