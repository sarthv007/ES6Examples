function calc(a, b, operation, callback) {
  if (operation === "add") {
    callback(a, b);
  }
  if (operation === "sub") {
    callback(a, b);
  }
}

function addition(a, b) {
  console.log(a + b);
}

function subtraction(a, b) {
  console.log(a - b);
}

calc(10, 30, "add", addition);
calc(100, 30, "add", subtraction);
