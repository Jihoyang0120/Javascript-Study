const a = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 100;
    setTimeout(() => {
      console.log(1);
      resolve();
    }, delay);
  });
};

const b = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 100;
    setTimeout(() => {
      console.log(2);
      resolve(2);
    }, delay);
  });
};

const c = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 100;
    setTimeout(() => {
      console.log(3);
      resolve(3);
    }, delay);
  });
};

a().then(b).then(c);

/*  async and await */

const one = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve(1);
    }, Math.random() * 200);
  });
};

const two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2);
      resolve(2);
    }, Math.random() * 200);
  });
};

const three = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(3);
      resolve(3);
    }, Math.random() * 200);
  });
};

const main = async () => {
  await one();
  await two();
  await three();
};

main();
