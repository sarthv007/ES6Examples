function Person(fName, lName, p, addr) {
  this.firstName = fName;
  this.lastName = lName;
  this.phone = p;
  this.address = addr;

  this.printDetails = function () {
    console.log(this.firstName + " " + this.lastName);
  };
}

let p1 = new Person("sarthak", "vaidya", "123123", "Ravet Pune");
let p2 = new Person("xyz", "abc", "123123", "Ravet Pune");
console.log(p1);
console.log(p2);
