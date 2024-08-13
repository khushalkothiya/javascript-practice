// function Person (name,age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function(){
//         console.log("hello,my name is ${this.name} and i am ${this.age} years onload.");
//     };
// }

// const person1 = new Person("Alice",30);
// const person2 = new Person("Bob",25);

// person1.sayHello();
// person2.sayHello();

// //example 2

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function() {
//     console.log("hello,my name is ${this.name} and i am ${this.age} years old.");
//   };
// }

// //example 3

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(){
//         console.log("hello,my name is ${this.name} and i am $")
//     }
// }

// // example 4

// function person(name,age){
//     if (typeof name !==string || typeof age !== number){
//         throw new Error("invalid input");
//     }
//     this.name = name;
//     this.age = age;
// }
// person.prototype.sayHello = function(){
//     console.log("hello,my name is ${this.name} and i am ${this.age} yearsn old.")
// };

// //exaample 5

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log("hello my name is $(this.name} and i am ${this.name} and i am $ {this.age} years old");
//   };
// }

// const person1 = new Person("pw",5);
// const person2 = new Person("pw skills",2);
// console.log(person1);
// console.log(person2);

// //example 6

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log(
//       "hello,my name is ${this.name} and i am $ {this.age} years old"
//     );
//   };
// }

// const person1 = new Person("pw",5);
// const person2 = new Person("pw skills",2);

// console.log(person1.name,person1.age);
// console.log(person2.name,person2.age);

// person1.sayHello();
// person2.sayHello();

// console.log(person1)
// console.log(person2)

// // Adding a property and method to the instance

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log("hello,my name is ${this.name} and i am ${this.age} years old");
//   };
// }
// const Person = new Person("pw", 5);
// Person.role = "admin";
// Person.getRole = function () {
//   console.log("i am a" + this.role);
// };
// console.log(Person);

// //Removing a property and method to the instance

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log("hello,my name is ${this.name} and i am ${this.age} years old");
//   };
// }
// const person = new Person("pw",5);

// person.role = "admin";
// person.getRole = function() {
//     console.log("i am a"+this.role);
// };

// delete person.sayHello;
// delete person.name;

// console.log(person)

// // 1. Basic Object Constructor

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person1 = new Person("Alice",30);
// const person2 = new Person("bob",25);

// // 2.complete constructor

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.greet = function() {
//     console.log("hello my name is ${this.name} am i am ${this.age} years old");
// };

// const alice = new Person ("Alice",30);
// const bob = new Person("bob",25)

// alice.greet();
// bob.greet();

// //complete class

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log("hello,my name is ${this.name} and i am ${this.age} yeras old");
//     }
// }

// const alice = new Person("Alice",30);
// const bob = new Person("bob,25");

// alice.greet();
// bob.greet();

// //example with inheritance

// function Person (name,age){
//     this.name = name;
//     this.age = age;
// }
// personalbar.prototype.greet = function() {
//     console.log("hello,my name is ${this.name} and i am ${this.age} years old");
// }

// //employee constructor function

// function Employee(name,age,jobTitle){
//     personalbar.call(this,name,age);
//     this.jobTitle = jobtitle;
// }

// //setting up prototypeal inheritance

// Emmployee.prototype = object.create(person.prototype);
// Employee.prototype.constructor = Employee;

//adding methods to employee's prototype

// Employee.prototype.describejob = function() {
//     console.log("i a, a ${this.jobtitle}");
// };

// //example

// function Person(first,last,age,eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// const myFather = new Person("john","doe",50,"blue");
// const myMother = new Person("sally","rally",48,"green");
// const mySister = new Person("Anna","rally",48,"green");
// const mySelf = new Person("johny","Rally",22,"green");

// console.log(myFather)

////example

// function Person(first,last,age,eyecolor){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyecolor = eyecolor;
//     this.nationality = "english";
// }

// myFather.nationality = "English";

// //example

// function Person(first,last,age,eyecolor){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.fullName = function(){
//         return this.firstName + "" + this.lastName;
//     }
// }

