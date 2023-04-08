// function add() {
//   console.log("from noraml function");
//   return arguments[0] + arguments[1];
// }

// const sum = (...rest) => rest[0] + rest[1];
// console.log(add(10, 20));
// console.log(sum(1, 2));

//constructable we can create a new object with help of new operator

// function Person(firstName, lastName) {
//   this.fName = firstName;
//   this.lName = lastName;
//   this.printFullName = function () {
//     console.log(this.fName + " " + this.lName);
//   };
// }

// let p = new Person("sarthak ", "vaidya");
// p.printFullName();

// const Person = (firstName, lastName) => {
//   this.fName = firstName;
//   this.lName = lastName;
//   this.printFullName = function () {
//     console.log(this.fName + " " + this.lName);
//   };
// };

// let p = new Person("sarthak ", "vaidya");
// p.printFullName();

let carNameArr = ["Audi", "Honda City", "Puch", "Mercedies"];

//console.log(carNameArr[3]);

// for (let i = 0; i < carNameArr.length; i++) {
//   console.log(carNameArr[i]);
// }

// let i = 0;
// while (i < carNameArr.length) {
//   console.log(carNameArr[i]);
//   i++;
// }

//let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//numArr.map((item) => console.log(item));
//console.log(newArr);

// let newArr = numArr.map((item) => {
//   if (item > 4) {
//     return item;
//   }
// });
// console.log(newArr);

// let newArr = numArr.filter((item) => item < 4);
// console.log(newArr);

//forEach loop
//numArr.forEach((item, index, arr) => console.log(item));

//for..in

//let numArr = [1, 22, 3, 4, 5, 6, 7, 8, 9, 10];
// let numArr = new Array([1, 22, 3, 4, 5, 6, 7, 8]);
// // for (let num in numArr) {
// //   console.log("key:" + num + " value:" + numArr[num]);
// // }

// //for...of

// for (let num of numArr) {
//   console.log(num);
// }

function addition(a) {
  console.log();
}
addition(10);
console.log(first);
// const sum = (a, a) => a + b;
// console.log(sum(10, 20));
