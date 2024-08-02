// // keys

// const student = {
//     name : "Alice",
//     age :20,
//     grade :"A",
// }

// const keys = Object.keys(student);
// console.log(keys);   //[ 'name', 'age', 'grade' ]

////values

// const student = {
//     name:"alice",
//     age:20,         vv
//     grade:"A",
// };

// const values = Object.values(student);
// console.log(values);

////entries

// const student = {
//   name: "Alice",
//   age: 20,
//   grade: "A",
// };

// const entries = Object.entries(student);

// console.log(entries); //[ [ 'name', 'Alice' ], [ 'age', 20 ], [ 'grade', 'A' ] ]

const dogproperties = {
  name: {
    value:"rover",
    writable:true,  //property can be changed
    enumerable:true,  //property shows up in for...in loops
  },
  age: {
    value:2,                                                                                                                   
    writable:true,
    enumerable:true,
  }
};

// create the dog object with additional properties
const myDog = Object.create(dog.dogProperties);

console.log(myDog.name);
console.log(myDog.age);
myDog.makeSound();
