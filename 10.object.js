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

////example=2

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

function person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;

  this.sayHello = function () {
    console.log(
      "hello,my name is ${this.name} and i am ${this.age} years old,"
    );
  };
}
