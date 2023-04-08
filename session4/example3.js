const firstName = "John";
const lastName = "Json";
const address = "USA";
let person = {
  firstName,
  lastName: lastName,
  address: "USA",
};

console.log("I am from ", person);

let employee = {
  firstName,
  lastName,
  address,
};

console.log("I am from ", employee);
