const async = (message, ret) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      console.log(new Date());
      resolve(ret);
    }, Math.random() * 500);
  });
};

const promises = [async("비동기함수1", 1), async("비동기함수2", 2)];
Promise.all(promises).then((data) => {
  console.log(`All promise has been done at ${new Date()}`);
});
