// complete this js code
function Person(name, age) {
	this.name = name;
  this.age = age;
  // Method to log a person with the greeting of name and age
  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };

}


function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
  this.jobTitle = jobTitle;

  // Method to log a greeting with the person's job title
  this.jobGreet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  };
}



// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
