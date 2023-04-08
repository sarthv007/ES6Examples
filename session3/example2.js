//syntax of object
// let objectName = {
//     key: value,
//     key: value
// }

let person = {
  firstName: "sarthak",
  lastName: "vaidya",
  phone: "1231231230",
  address: {
    pincode: 411044,
    city: "Pune",
    nearByLocation: "Ravet",
    details: {
      nameOfContactPerson: ["sarthak", "ganesh"],
      orgnization: "HCL",
      district: "Pune",
    },
  },
};

let person1 = {
  firstName: "ayz",
  lastName: "abc",
  phone: "1231231230",
  address: {
    pincode: 411044,
    city: "Pune",
    nearByLocation: "Ravet",
    details: {
      nameOfContactPerson: ["sarthak", "ganesh"],
      orgnization: "HCL",
      district: "Pune",
    },
  },
};

// console.log(person.firstName);
// console.log(person["firstName"]);

// console.log(person.address.city);
// console.log(person["address"]["city"]);

console.log(person);
console.log(person1);
