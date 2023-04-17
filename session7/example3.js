const p1 = new Promise((resolve, reject) => {
  reject("error occured");
});

const p2 = new Promise((resolve, reject) => {
  resolve(20);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error has occured");
  }, 5000);
});

Promise.race([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => console.log(error));
