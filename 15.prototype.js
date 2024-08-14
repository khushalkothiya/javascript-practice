// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// const person1 = new Person("Alice",30);
// const Person2 = new Person("bob",25);

// console.log(person1.name);
// console.log(person1.age);

// //example = 2

// const institute = {
//     instituteName:"pe skills",
//     instituteLocation:"banglore",
//     instituteDomain:"edtech",
// }
// const student = {
//     studentName:"vinay pratap singh",
//     courceName:"full stack web devlopement",
// }
// student.__proto__ = institute;
// console.log(student.__proto__.instituteName);

// //example = 3

// const institute = {
//     instituteName : "PW skills",
//     instituteLocation:"banglore",
//     instituteDomation:"Edtech",
// };
// const student = Object.create(institute);
// student.studentName = "vinay pratap singh";
// student.courseName = "full stack web devlopement";
// student.instituteName = "iNeuro";
// console.log(student.instituteName)
// console.log(student.studentName)

// //example = 4

// function Company(CompanyName, CompanyLocation, CompanyDomain) {
//   this.CompanyName = CompanyName;
//   this.CompanyLocation = CompanyLocation;
//   this.CompanyDomain = CompanyDomain;
// }

// const company1 = new Company("pw skills", "Banglore", "Edtech");
// console.log(company1);
// Company.prototype.printCompanyDetails = function () {
//   console.log(
//     "${this.CompanyName} is located in ${this.CompanyLOcation} and it is ${this.CompanyDomain} company"
//   );
// };
// company1.printCompanyDetails();

// //example = 5

// function Company(CompanyName, CompanyLocation, CompanyDomain) {
//   this.CompanyName = CompanyName;
//   this.CompanyLocation = CompanyLocation;
//   this.CompanyDomain = CompanyDomain;
// }
// Company.prototype.printCompanyDetails = function () {
//   console.log(
//     "${this.CompanyName} is located in ${this.CompanyLocation} and it is an &{this.CompanyDomain}"
//   );
// };

// const company1 = new Company ("pw skill","banglore","edtech");
// company1.printCompanyDetails();

// company1.prototype.printCompanyDetails = function() {
//     console.log("modified method")
// }

// //example = 6 prototype

// function Person(name) {
//     this.name=name;
// }
// Person.prototype.sayHello = function () {
//     console.log("hello,my name is ${this.name}");
// }

// const john = new Person("john");

// john.sayHello();

// //example = 7 creating object with prototype

// const obj = {
//     name:"alice"
// };
// console.log(obj.toString());

// //example = 8

// function Person(name) {
//     this.name= name;
// }

// Person.prototype.sayHello = function() {
//     return "hello,my name is ${this.name}";
// }

// const alice = new Person("Alice");
// console.log(alice.sayHello());

// //example = 9

// const animal = {
//   type: "animal",
//   eat: function () {
//     return "Eating..";
//   },
// };
// const dog = Object.create(animal);
// dog.type = "dog";
// dog.bark = function () {
//   return "woof";
// };

// console.log(dog.type);
// console.log(dog.eat());
// console.log(dog.bark());

// //example = 10

// function Person(name) {
//     this.name = name;
// }
// Person.prototype.greet = function() {
//     console.log("hello,my name is ${this.name}");
// };
// Person.prototype.species = "Homo sapiens";

// const person1 = new Person("Alice");
// const person2 = new Person("bob");

// person1.greet();
// person2.greet();

// console.log(person1.species);
// console.log(person2.species);

// example = 11

function Animal(name) {
    this.name = name; 
}
Animal.prototype.speak  = function() {
    console.log("${this.name} makes a noise.");
}
function Dog(name) {
    Animal.call(this,name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.contructor = Dog;
Dog.prototype.speak = function() {
    console.log(`${this.name}barks`);
};
const myDog = new ("rex");
myDog.speack();