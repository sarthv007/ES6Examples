const str = "Welcome to reasct js";

//includes
// if (str.includes("js")) {
//   document.write("Welcome to react");
// } else {
//   document.write("Welcome to js");
// }

//startWith
//console.log(str.startsWith("Welcome1"));

//endWith
//console.log(str.endsWith("js"));

//indexOf

// if (str.indexOf("to") !== -1) {
//   console.log("string found");
// } else {
//   console.log("string not found");
// }

//findIndex

const letters = ["a", "b", "c", "d", "e"];

console.log(
  letters.findIndex((item) => {
    return item === "c";
  })
);
