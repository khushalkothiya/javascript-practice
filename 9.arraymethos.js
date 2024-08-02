// //sort
// //compare function

// function compareFunc(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }

//   return 0;
// }



//sort a list of string items
//given an array of strings

// let names = ["shivam","mahesh","nasikh","prabir","mangesh"];
// names.sort()
// console.log(names)  //[ 'mahesh', 'mangesh', 'nasikh', 'prabir', 'shivam' ]



//sort numeric values
//given array
// let numbers = [18,155,78,97,86];
// numbers.sort();
// console.log(numbers);  //[ 155, 18, 78, 86, 97 ]



// //sample array of objects

// const arrayOfObjects = [
//     {name:"john",age:25},
//     {name:"alice",age:30},
//     {name:"bob",age:20},
// ];
// arrayOfObjects.sort((a,b) => a.age - b.age)
// console.log(arrayOfObjects);



// let numbers=[1,2,3,4,5,6,7,8,9];
// let evenOddResults = [];

// numbers.forEach(function(number){
//     if (number%2==0){
//         evenOddResults.push("${number} is even");
//     }else{
//         evenOddResults.push("${number} is odd");
//     }
// });

// evenOddResults.forEach(function(result){
//     console.log(result);
// })



// const names = ["nasikh","mahesh","pambir"]

// const thisref={welcome:"welcome to  physics wallah"}

// names.forEach(function(currentValue){
//     console.log("hi" + currentValue+","+this.welcome);
// })

