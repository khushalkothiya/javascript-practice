//slice method 

console.log("hello world!".slice(6))  //world!
console.log("hello world!".slice(6,11)) //world

//substring 

console.log("hello".substring(2))  //llo
console.log("hello".substring(1,3))  //el

//substr

const str = "pw skills"

console.log(str.substr(1,2));  //w
console.log(str.substr(2));   //skills

//replace

console.log("hello world world".replace("world","earth"))  //hello earth world
console.log("hello world world".replaceAll("world","earth"))  //hello earth earth

//to upper case