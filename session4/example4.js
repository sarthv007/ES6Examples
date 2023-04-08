//let carsArr = ["BMW", "audi", "honda city", "mercedis"];

// let flag = carsArr.every((item) => item === "BMW");
// console.log(flag);

// let flag = carsArr.some((item) => item === "BMW");
// console.log(flag);

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = num.reduce((sum, item, index, arr) => sum + item);
console.log(result);

let sum = 0;
for (let i of num) {
  sum += i;
}
console.log(sum);
