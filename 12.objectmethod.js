// //keys

// const student = {
//   name:"alice",
//   age:20,
//   grade:"a",
// };
// const keys = Object.keys(student);
// console.log(keys)

// //values

// const student = {
//   name:"alice",
//   age:20,
//   grade:"a",
// };
// const values=Object.values(student);
// console.log(values);

// //entries

// const student = {
//   name:"alice",
//   age:20,
//   grade:"A",
// };
// const entries = Object.entries(student);
// console.log(entries);

//create

// const personPrototype = {
// }

// //assign()

// const person = {
//   name:"alice",
// };
// const details = {
//   age:25,
//   country:"usa",
// }
// const personalDetails = Object.assign({},person,details);
// console.log(personalDetails);

// //fromEntries

// const keyValuePairs = [["name", "alice"], ["age", 25][("country", "usa")]];
// const person = Object.fromEntries(keyValuePairs);
// console.log(person);

// //define property

// const person = {};

// Object.defineProperties(person, {
//   name: {
//     value:"alice",
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },
//   age: {
//     value: 30,
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },
// });

// console.log(person.name);
// console.log(person.age);

// //define own propertydes

// const myObject = {
//   name:"john",
//   age:30
// };
// const descriptor = Object.getOwnPropertyDescriptor(myObject,"name");
// console.log(descriptor);

//getownpropertyname()

// // getOwnPropertyDescriptor()

// const myObject = {
//   name: "alice",
//   age: 25,
// };
// Object.defineProperty(myObject, "age", {
//   value: 25,
//   writable: false,
//   enumerable: true,
//   configurable: true,
// });
// const descriptor = object.getOwnPropertyDescriptor(myObject,"age");

// //getOwnPropertyNames()

// const myObject = {
//   name: "alice",
//   age: 25,
// };

// Object.defineProperty(myObject, "secret", {
//   value: "hidden",
//   enumerable: false,
// });
// const propertyNames = Object.getOwnPropertyNames(myObject);
// console.log(propertyNames);

// // getPrototypeOf()

// const parentObject = {
//   greet:function(){
//     return "hello";
//   }
// };
// const childObject = Object.create(parentObject);
// childObject.name = "alice";
// const prototypeOfChild = Object.getPrototypeOf(childObject);
// console.log(prototypeOfChild==parentObject);
// console.log(prototypeOfChild.greet());

// //  preventExtensions()

// const myObject = {
//   name:"Alice",
//   age:30
// };
// Object.preventExtensions(myObject);
// myObject.job = "Engineer";
// myObject.age = 31;
// console.log(myObject.age);
// console.log(myObject.job);
// delete myObject.name;
// console.log(myObject.name);

// //isExtensible()

// const myObject = {
//   name:"Alice",
//   age:30
// };
// console.log(Object.isExtensible(myObject));
// Object.preventExtensions(myObject);
// console.log(Object.isExtensible(myObject));

// //seal()

// const myObject = {
//   name:"Alice",
//   age:30
// };
// console.log(Object.isExtensible(myObject));
// Object.seal(myObject);
// console.log(Object.isSealed(myObject));
// myObject.newProperty = "this wontbe added";
// console.log(myObject.newProperty);
// delete myObject.age;
// console.log(myObject.age);
// myObject.name = "Bob";
// console.log(myObject.name);

// //local scope  function scope

// function outerFunction() {
//   let outVar = "i am from the outer function";

//   function innerFunction(){
//     let innerVar = "i am from the inner Function";
//     console.log(outerVar);
//     console.log(innerVar);
//   }
//   innerFunction();
//   console.log(innerVar);
// }
// outerFunction();
// console.log(outerVar);

// // //local scope block scope

// let outerVar = "outer";

// {
//   let innerVar = "inner";
//   console.log(outerVar);
//   console.log(innerVar);
//   {
//     let nestedVar = "nested";
//     console.log(innerVar);
//     console.log(nestedVar);
//   }
//   console.log(nestedVar);
// }
// console.log(innerVar);
