class Person {
  constructor(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;
  }

  personInfo() {
    console.log(
      `Person details from person class is ${this.fName}, ${this.lName}`
    );
  }
}

class Employee extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  empDetails() {
    console.log("I am from Employee class");
  }
}

let emp = new Employee("sarthak", "vaidya");
emp.personInfo();
emp.empDetails();
