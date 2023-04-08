//spread operator
//syntax
//...arr

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 0];
// let arr3 = [11, 23];

// let arr4 = arr1.concat(arr2).concat(arr3);
// console.log(arr4);

// //with the help of spread operator

// let arr5 = [...arr1, ...arr2, ...arr3];
// console.log(arr5);

//spead operator can be used for concatination of object as well

// let objectName = {
//     key: value
// }
// objectName.key
// objectName['key']

let person1 = {
  first_name: "Rishi",
  address: "Pune",
};

let person2 = {
  last_name: "xyz",
};

let person3 = { ...person1, ...person2 };
console.log(person3);
