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

const d = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(4);
    }, delay)
  );
};

a().then(b).then(c);
