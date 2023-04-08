// const getData = () => {
//   console.log(this);
// };
// getData();

// function getData() {
//   console.log(this);
//   const setData = () => {
//     console.log(this);
//   };
//   setData();
// }
// getData();
// //console.log(this);

let person = {
  firstName: "sarthak",
  lastName: "vaidya",
  fullName: () => {
    console.log(this);
  },
};

person.fullName();

// import AClass from "../session4/example2";
// import { person, getData, cars } from "../session4/example2";
// const a = new AClass();
// console.log(person, getData, cars);
