// // slice

// let array = [1, 2, 3, 4, 5];

// // Remove 2 elements starting from index 2
// array.splice(2, 2); // array is now [1, 2, 5]

// // Add elements starting from index 2, removing 0 elements
// array.splice(2, 0, 'a', 'b'); // array is now [1, 2, 'a', 'b', 5]

// // Replace 1 element at index 3
// array.splice(3, 1, 'c'); // array is now [1, 2, 'a', 'c', 5]

// //push

// let fruits = ["apple","banana"];
// let length = fruits.push("cherry","orange");
// console.log(fruits);  //[ 'apple', 'banana', 'cherry', 'orange' ]
// console.log(length);  //4

// //pop

// let fruits = ["apple","banana"];
// let last = fruits.pop();
// console.log(fruits);  //[ 'apple' ]
// console.log(last);  //banana

// //shift

// let fruits = ["apple","banana","cherry"];
// let first = fruits.shift();
// console.log(fruits);  //[ 'banana', 'cherry' ]
// console.log(first);  //apple

//unshift

// let fruits = ["banana","cherry"];
// let length = fruits.unshift("apple");
// console.log(fruits);  //[ 'apple', 'banana', 'cherry' ]
// console.log(length);  //3

// //reverse

// let fruits = ["apple","banana","kiwi","mango"];
// fruits.reverse();
// console.log(fruits);

// //join

// let fruits = ["apple","banana","cherry"]
// let result = fruits.join("-");
// console.log(result);

// //tostring

// const numbers = [1,2,3,4,5,6,7,8];
// const numberofstring = numbers.toString();
// console.log("type of =",numberofstring);
// console.log("number of string",numberofstring);

// //delete operator

// let mentors = ["anurag","hitesh","vishwas","sanket"]
// delete mentors[0]
// console.log(mentors.length);  //4
// console.log(mentors);  //[ <1 empty item>, 'hitesh', 'vishwas', 'sanket' ]
// console.log(mentors[0]);  //undefined

// //concat

// let array1 = [1,2,3]
// let array2 = [4,5,6]
// let newArray = array1.concat(array2);
// console.log(newArray)  //[ 1, 2, 3, 4, 5, 6 ]

// //foreach

// const array = [1, 2, 3, 4, 5];
// array.forEach((element) => {
//     console.log(element);
// });

// //map

// const numbers = [1, 4, 9];
// const roots = numbers.map(Math.sqrt);

// //filter

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length>6);
// console.log(words)

// //reduce

// const array = [1,2,3,4]
// const reducer = (accumulator,currentvalue) => accumulator + currentvalue;
// const intigialvalue = 0;
// const sum = array.reduce(reducer, initialValue);

// //indexOf and lastIndexOf

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('biston'));
// console.log(beasts.lastIndexOf("bison"));

// //find and findindex

// const array = [5,12,8,130,44];
// const found = array.find(element => element >10);
// console.log(array)
// const foundIndex = array.findIndex(element => element > 10);
// console.log(array)

// //every and some

// const array =[1, 30, 39, 29, 10, 13];
// const alloOver18 = array.every(age => age >18);
// console.log(array)
// const someOver18 = array.some(age => age > 18);
// console.log(array)

// //includes

// const array = [1, 2, 3];
// console.log(array.includes(2)); 
// console.log(array.includes(4));