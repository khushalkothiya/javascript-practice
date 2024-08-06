// const language = ["javascript","python","java","golang"]
// const len =language.length
// console.log("array length=",len)                


// let player = ["virat kohli","rohit sharma","suryakumar yadav","shivam","rishabh pant","ravindra jadeja",'kl rahul']
// let number = [1,2,3,4,5,6,7,8,9,0]
// let array = ["hello",20,true]
// console.log(player);
// console.log(number);
// console.log(array);



//three types og declaration of array

//using square brackets
// let fruits =["apple","mango","banana","kiwi"];

// //using the array constructor
// let numbers = new Array(1,2,3,4,5);

// let emptyArray = new Array(5); // creates an array with 5 empty elements

// //using array literal
// let colors = Array("black","red","white","blue")



//array index storing

// let players = [];  // create empty array
// let fruits = [];
// fruits[0] = "virat";  //store "virat" at index 0
// fruits[1] = "kl";  //store "kl" at index 1
// fruits[2] = "ms";  //store "ms" at index 2
// console.log(fruits)



// //accessing elements in array

// let players = ["virat","rohit","kl"];
// players[0];  //virat
// players[1];  //rohit
// players[2];  //suryakumar
// console.log(players)



// //changing value in array

// const hobbies = ["coading","learning","watching movies"]

// hobbies[0] = "building project"  //changes to buiding project
// hobbies[2] = "football"  //cahnge of football
// console.log(hobbies)



// //delete arrays

// const array = [1,2,3,4]
// console.log(array.length); //output - 4
// delete array[2];
// console.log(array);  //output - [1,2,<1 empty item ,4]
// console.log(array[2]);  //output - undefined
// console.log(array.length);  //output - 4 same length evenafter delete

// for (let i=1;i<=5;i++){
//     console.log(i);
// }

// //looping through an array

// const fruits = ["apple","banana","cherry"];

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }


//nested 'for' loops:

// for (let i=1;i<=3;i++){
//     for (let j=1;j<=3;j++){
//         console.log("i = ${i},j = ${j}")
//     }
// }

// //looping with a break statement 

// for (let i=1;i<=10;i++){
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }

// //looping with a continue statement

// for (let i=1;i<=10;i++){
//     if(i%2 === 0){
//         continue;
//     }
//     console.log(i)
// }

// //for of loop Iterating Over an Array

// const fruits = ["apple","banana","cherry"];

// for (const fruit of fruits){
//     console.log(fruit);
// }

// // for of loop Iterating Over a String

// const word = "hello";

// for (const letter of word){
//     console.log(letter);
// }

// for of loop iterating over a set

// const uniqueNumbers = new setInterval([1,2,3,4,5])
// for (const number of uniqueNumbers){
//     console.log(number);
// }

//for of loop iterating over a map

// const map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// for (const [key, value] of map) {
//     console.log(`${key} => ${value}`);
// }

// //for of loop skipping items

// const numbers = [1,2,3,4,5];
// for(const number of numbers){
//     if(number % 2 --- 0){
//         continue;
//     }
//     console.log(number);
// }

// //while loop

// let number = 1;
// while (number <= 5){
//     console.log(number);
// }

// // dowhile loop

// let number = 1;
// do{
//     console.log(number);
//     number++;
// }while(number <= 5);

// //while loop

// let number =1;
// while (true){
//     if(number>5)break;
//     console.log(number);
//     number++;
// }   