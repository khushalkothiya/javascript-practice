var num1 = 10;
var num2 = 20;
var num3 = 10;

// 1. Logical AND
result1 = num1 >= num3 && num1 == num3;
result2 = num1 >= num2 && num1 == num3;

// 2. Logical OR
result3 = num1 >= num3 || num1 == num3;
result4 = num1 >= num2 || num1 == num3;
result5 = num1 >= num2 || num1 > num3;

// 3. Logical NOT
result6 = num1 == num3;
result7 = !(num1 == num3);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);