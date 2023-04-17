// function getUsers(callback) {
//   setTimeout(() => {
//     callback([
//       { username: "john", email: "john@test.com" },
//       { username: "jane", email: "jane@test.com" },
//     ]);
//   }, 1000);
// }

// function findUser(username, callback) {
//   getUsers((users) => {
//     const user = users.find((user) => user.username === username);
//     callback(user);
//   });
// }

// function printResult(result) {
//   console.log(result);
// }

// findUser("jane", printResult);

function getUsers() {
  const flag = false;
  return new Promise((resolve, reject) => {
    if (flag) {
      setTimeout(() => {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      }, 1000);
    } else {
      reject("Promise has been rejected");
    }
  });
}

const promise = getUsers();
promise
  .then((users) => {
    const user = users.find((user) => user.username === "jane");
    console.log(user);
  })
  .catch((error) => console.log(error));
