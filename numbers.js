
console.log(9999999999999999) // outputs 10000000000000000
let num1 = 0.1;
let num2 = 0.2; 
let sum = num1 + num2;
console.log(sum == 0.3) // false
console.log(sum) // 0.30000000000000004

console.log(sum.toFixed(2)==0.3)

console.log(isNaN(NaN)) // true

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER + 1)