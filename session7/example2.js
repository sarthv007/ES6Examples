const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error has occured");
  }, 5000);
});

// Promise.all([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => console.log(error));

Promise.race([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => console.log(error));
