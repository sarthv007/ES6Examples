function download(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("downloading: ", url);
      resolve(`Processing ${url}`);
    }, 1000);
  });
}

const url1 = "http://img1.jpg";
const url2 = "http://img2.jpg";
const url3 = "http://img3.jpg";

let d = download(url1);
d.then((result) => {
  console.log(result);
});

let d1 = download(url2);
d1.then((result) => {
  console.log(result);
});

let d2 = download(url3);

d2.then((result) => {
  console.log(result);
});

// const p1 = new Promise((resolve, reject) => {
//   const flag = false;
//   if (flag) {
//     resolve("In resolve callback");
//   } else {
//     reject("In reject callback");
//   }
// });

// p1.then((result) => {
//   console.log(result);
// });

// p1.catch((error) => {
//   console.log(error);
// });

// //console.log(p1);

// const p1 = new Promise((resolve, reject) => {
//   const flag = false;
//   if (flag) {
//     resolve("In resolve callback");
//   } else {
//     reject("In reject callback");
//   }
// });

// p1.then((result) => {
//   console.log(result);
// });

// p1.catch((error) => {
//   console.log(error);
// });

// //console.log(p1);
