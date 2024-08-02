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



//iterating of array items

// for loop

// const array = [1,2,3]; 

// for(let index = 0; index < array.length; index++){
//     const element = array[index];
//     console.log(element);
// }


//while loop

// const array = [1,2,4,3];
// let i = 0;
// while (array.length > i){
//     console.log(array[i]);
//     i++;
// }