function getData() {
  console.log("inside getData function", arguments);
  return arguments[0] + arguments[1] + arguments[2] + arguments[3];
}

let result = getData(1, 2, 3, 4);
console.log(result);
