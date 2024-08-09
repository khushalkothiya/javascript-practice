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