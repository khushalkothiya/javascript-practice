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

// // example = 11

// function Animal(name) {
//     this.name = name;
// }
// Animal.prototype.speak  = function() {
//     console.log("${this.name} makes a noise.");
// }
// function Dog(name) {
//     Animal.call(this,name);
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.contructor = Dog;
// Dog.prototype.speak = function() {
//     console.log(`${this.name}barks`);
// };
// const myDog = new ("rex");
// myDog.speack();

// //example = 12

// function Person(name){
//     this.name = name;
// }

// Person.prototype.greet = function() {
//     return `hello my name is ${this.name}`;
// };

// const alice = new Person("Alice");
// console.log(alice.greet);

// //example = 14

// const myObject = {
//     city:"madrid",
//     greet() {
//         console.log(`greeting from ${this.city}`);
//     }
// };

// myObject.greet();

// //example = 15

// const myDate = new Date();
// let object = myDate;

// do{
//     object = Object.getPrototypeOf(object);
//     console.log(object);
// }while(object);

// //example = 16

// const myDate = new Date(1995, 11, 17);

// console.log(myDate.getTime());

// myDate.getTime = function() {
//     console.log("something else!!");
// };

// myDate.getTime();

// //example = 17

// function Person (first,last,age,eyecolor){
//     this.firstName = first;
//     this.lasttime= last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }

// const myFather = new Person("john","doe",50,"blue");
// const myMother = new Person("sally","rally",48,"green");

// console.log(myFather);
// console.log(myMother);

// function Person (first,last,age,eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.nationality = "english";

// //example = 18

// Date.prototype.myMonth = function () {
//   if (this.getMonth() == 0) {
//     return "january";
//   }
//   if (this.getMonth() == 1) {
//     return "february";
//   }
//   if (this.getMonth() == 2) {
//     return "march";
//   }
//   if (this.getMonth() == 3) {
//     return "April";
//   }
//   if (this.getMonth() == 4) {
//     return "May";
//   }
//   if (this.getMonth() == 5) {
//     return "June";
//   }
//   if (this.getMonth() == 6) {
//     return "July";
//   }
//   if (this.getMonth() == 7) {
//     return "August";
//   }
//   if (this.getMonth() == 8) {
//     return "September";
//   }
//   if (this.getMonth() == 9) {
//     return "October";
//   }
//   if (this.getMonth() == 10) {
//     return "November";
//   }
//   if (this.getMonth() == 11) {
//     return "December";
//   }
// };

// const d = new Date();
// let month = d.myMonth();

// //example = 19

// Boolean.prototype.myColor = function() {
//     if (this.valueOf() == true) {
//         return "green";
//     }else{
//         return = "red";
//     }
// };

// //example = 20

// let bool = false;
// let value = bool.valueOf();
// console.log(bool)

// //example = 21

// let bool = true;
// let text = bool.toString();

// //example = 22

// Number.prototype.myMethod = function () {
//   return this.valueOf() / 2;
// };

// let n= 55;
// let x = n.myMethod();

// //example = 23

// function employee(name,jobtitle,born) {
//     this.name = name;
//     this.jobtitle = jobtitle;
//     this.born = born;
// }

// employee.prototype.salary = 2000;

// const fred = new employee("fred flintstone","caveman",1970);

// console.log(fred);

// class Dog{
//     constructor(name){
//         this.name = name;
//     }
// }
// Dog.prototype.species = "dog";
// console.log(new Dog("jack").species);