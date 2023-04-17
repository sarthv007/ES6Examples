const p1 = new Promise((resolve, reject) => {
  reject("error occured");
});

const p2 = new Promise((resolve, reject) => {
  reject("error occured");
});

const p3 = new Promise((resolve, reject) => {
  resolve("promise success");
});

Promise.any([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => console.log(error));
