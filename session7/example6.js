const p1 = new Promise((resolve, reject) => {
  resolve("Success in promise 1");
});

const p2 = new Promise((resolve, reject) => {
  resolve(20);
});

const p3 = new Promise((resolve, reject) => {
  resolve(30);
});

async function getData() {
  try {
    const result = await p1;
    const result1 = await p2;
    const result2 = await p3;

    console.log(result);
    console.log(result1);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}
getData();
