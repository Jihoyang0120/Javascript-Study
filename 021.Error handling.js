// Promise의 에러 처리

const a = (c = "Default") => {
  return new Promise((resolve, reject) => {
    // 비동기 함수 로직
    throw new Error("Error 1");
    reject(new Error("Error2 "));
    reject("Error");
    setTimeout(() => {
      resolve(` value is ${c}`);
    }, 1 * 1000);
  });
};

a()
  .then((ret) => {
    return a("not Default");
  })
  .then((ret) => {
    console.log(ret);
  })
  .catch((e) => {
    console.log(`${e} has occured`);
  });
