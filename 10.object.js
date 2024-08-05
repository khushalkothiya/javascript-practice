// // by object literal

// const person = {
//     firstname:"john",
//     lastname:"doe",
//     age:30,
//     greet:function(){
//         console.log("hello");
//     }
// };

// // creating an object using object constructor

// const person = new Object();
// person.firstName = "john"
// person.firstName = "doe";
// person.age = 30;
// person.greet = function() {
//     consolelogg("hello");
// }

// //example=2

// function Car(make,model,year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// let myCar = new Car("toyota","camry",2023);
// let anotherCar = new Car("tesla","model s",2024);

// console.log(myCar.make);
// console.log(anotherCar.model);

// // Creating an Object Using Object Constructor Function

// function person(firstName,lastName,age){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age = age;
//     this.greet = function(){
//         console.log("hello");
//     };
// }
// const person = new person("john","doe",30)

// // You can access object properties using dot notation, like this:
// console.log(person.firstName); // Outputs: "John"
// console.log(person.age);
// // Outputs: 30
// person.greet();
// outputs: "Hello!"

// const person ={
//     firstName:"john",
//     lastNaame:"doe",
//     age:30
// };

// for (const key in person){
//     console.log(key + ":" + person[key]);
// }

// const propertName = "age";
// const person = {
//     name:'john',
//     [propertName]:30,
// };
// console.log(person.age);

// function person(name, age, profession) {
//   this.name = name;
//   this.age = age;
//   this.profession = profession;

//   this.sayHello = function () {
//     console.log(
//       "hello,my name is ${this.name} and i am ${this.age} years old,"
//     );
//   };
// }

// //dot notation object

// let person = {
//     firstName:"john",
//     lastName:"dpe",
//     age:30,
//     greet:function(){
//         console.log("hello,my name is ${this.firstName} $ {this.lastName}.");
//     }
// };

// console.log(person.firstName);
// console.log(person.age)

// //square brakets notation

// let person = {
//     name:"john",
//     age:30
// };

// console.log(person["name"])
// console.log(person["age"])

// //using expressions

// let person = {
//   name: "john",
//   age: 30,
// };
// const propertyName = "age";
// console.log(person[propertyName]);

// //adding a properties

// let person = {
//   name: "john",
//   age: 30,
// };
// person.city = "new york";
// console.log(person.city);

// // removing properties

// let person = {
//   name: "john",
//   age: 30,
//   city:"surat",
// };
// delete person.city;
// console.log(person.city)

// //Iterating through Object Properties with for … in in javascript

// let person = {
//   name: "john",
//   age: 30,
//   city: "new york",
// };

// for (let key in person) {
//   console.log(key + ":" + person[key]);
// }

// //in operator

// const person = {
//     firstName:"john",
//     lastName:"doe",
//     age:30
// }

// //check if "firstName" property exists in "person"
// const hasFirstName = "fistName" in person;
// console.log(hasFirstName);

// //check if "email" property exists in "person"
// const hasEmail = "email" in person;
// console.log(hasEmail);

// //property access

// const user = {
//     id : 1,
//     name:"john",
//     address:{
//         streer:"123 main ft",
//         city:"nagpur",
//     },
// };
// // Let's use optional chaining to access the 'city' property within the 'address' object.
// const userCity = user.address?.city;
// const userState = user.address?.state
// console.log(userCity);
//  // This will log 'Nagpur' since 'city' exists in the 'address' object.
// console.log(userState);
// // This will log 'undefined' since 'state' does not exists in the 'address' object.

// //method call

// // Define an object with a method
// let car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     displayInfo: function() {
//         return `${this.brand} ${this.model} (${this.year})`;
//     }
// };

// // Calling the method using dot notation
// let carInfo = car.displayInfo();
// console.log(carInfo); // Output: Toyota Camry (2022)

// //dynamic property access

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// // Dynamic property access using a variable
// let propertyName = "firstName";
// console.log(person[propertyName]); // Output: 'John'

// // Changing the variable to access another property dynamically
// propertyName = "age";
// console.log(person[propertyName]); // Output: 30

// // Using dynamic property access in a function
// function getProperty(obj, prop) {
//   return obj[prop];
// }

// console.log(getProperty(person, "lastName")); // Output: 'Doe'

// //scopes

// var teacher = "sanket singh"; // global scope
// function fun(){
//     var teacher = "ssarthak";
//     console.log("hello",teacher);
// }

// function gun(){
//     var student = "aman";
//     console.log(student)
// }
// fun();
// gun();

// //scopes

// var teacher = "sanket singh";
// function fun() {
//   var teacher = "sarthak";
//   console.log("hello", teacher);
// }
// function gun(){
//     var student = "aman";
//     console.log("hello",teacher);
// }
// fun();
// gun();

// //scops

// var teacher = "sanket singh";
// function fun(){
//     teacher = "sarthak";
//     content = "js";
//     console.log("wow",content,teacher);
// }
// fun();
// console.log(teacher);
// console.log(content);

// //scops

// var x=10;
// console.log(x,y);
// if(true){
//     var x = 20;
//     var y = 30;
//     console.log(x,y);
// }
// console.log(x,y);