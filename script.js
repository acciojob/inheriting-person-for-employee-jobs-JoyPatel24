// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}

// method to log a person with the greeting of name and age
Person.prototype.greet = function () {
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)	
}

function Employee(name, age, jobTitle) {
	Person.call(this, name, age)
	this.jobTitle = jobTitle;
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
