//function expression

//syntax arrow function
const getData = () => {
  console.log("I am with curly brances");
};

const setData = () => console.log("I am without curly brances");

//normal function
function addition(a, b, c) {
  console.log("addition is as follow");
  return a + b + c;
}
//arrow function
const additionUsingArrowFunction = (a, b, c) => a + b + c;
//function call
// getData();
// setData();
const result = addition(10, 20, 30);
const sum = additionUsingArrowFunction(10, 20, 30);
console.log(result, sum);

let personObj = {
  firstName: "john",
  lastName: "doe",
  printFullName: function () {
    return `${this.firstName} and ${this.lastName}`;
  },
};

console.log(personObj.printFullName());
