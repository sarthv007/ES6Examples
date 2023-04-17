const person = {
  firstName: "sarthak",
  lastName: "vaidya",
  phone: 1231212,
  address: {
    city: "Pune",
  },
};

console.log(person);

const map = new Map();

map.set("courseName", "Javascript");

map.set(1, "100");

map.set(false, "bolean value");

map.set(null, "1");

map.set(undefined, "sarthak");

const obj = {
  name: "abc",
};

map.set(obj, "sarthak");

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
map.set(arr, "its an array");

console.log(map.get(arr));
console.log(map);

map.delete(arr);
console.log(map);

console.log(map.size);

console.log(map.keys());
console.log(map.values());

console.log(map.entries());

const wMap = new WeakMap();
let obj1 = {};
wMap.set(obj1, "Javascript");
obj1 = null;
console.log(wMap);
