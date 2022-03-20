/* reason으로 에러를 잡음 (onReject된 상태의 error만 잡을 수 있음) */

const async1 = (param) => {
  return new Promise((resolve, reject) => {
    resolve(param * 2);
  });
};

const async2 = (param) => {
  return new Promise((resolve, reject) => {
    throw "Error 1";
    resolve(param * 2);
    console.log("async2 Done");
  });
};

async1(1)
  .then(async2)
  .then(
    (result) => {
      console.log(result);
    },
    (reason) => {
      console.log(`Promise has close due to ${reason}`);
    }
  );
