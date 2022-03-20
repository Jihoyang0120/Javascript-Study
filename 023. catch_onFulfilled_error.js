/* catch를 통해 onFulfilled 에러 잡기 */

const async1 = (param) => {
  return new Promise((resovle, reject) => {
    resovle(param * 2);
  });
};

const async2 = (param) => {
  return new Promise((resovle, reject) => {
    resovle(param * 2);
  });
};

async1(1)
  .then(async2)
  .then((result) => {
    console.log(result);
    throw "onFulfilled Error";
  })
  .catch((reason) => {
    console.log(`Promise has been closed due to ${reason}`);
  })
  .finally(() => {
    console.log("Promise가 정상적으로 종료되었습니다.");
  });
