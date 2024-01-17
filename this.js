"use strict"

// (function(){ 
//     (function check(){
//         console.log(this)
//     })()
// })()

// const func = function(){
//     console.log(this)
// }

// func()
// const array = [1,2,3]

// console.log(func.__proto__);
// console.log(array.__proto__)

// console.log(func.prototype);
// console.log(array.prototype)
// console.log(this)

const student = {
    role : 'student'
}

const teacher = {
    role : 'teacher'
}

function roleLogger(){
    console.log(this.role)
}

student.roleLogger = roleLogger;
teacher.roleLogger = roleLogger;

student.roleLogger();
teacher.roleLogger();

console.log(student.roleLogger === teacher.roleLogger)

const arr = [1,2,3, NaN];
console.log( arr.indexOf(NaN) );

