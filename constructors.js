"use strict"

const User = function(name){
    this.name = name;
}

User.prototype.getName = function() {
    return this.userName
}

console.log(new User('hello'))

//Task 1

// const obj = {};

// function A() {
//     return obj
// }

// function B(){
//     return obj
// }

// console.log(new A() == new B())



//Task 2 

const input1 =5;
const input2 =10

const Calculator = function() {

    this.read = function(){
        this.input1 = input1;
        this.input2 = input2
    }

    this.sum = function(){
        return +this.input1 + +this.input2;
    }

    this.mul = function(){
        return +this.input1 * +this.input2;
    }
}

//  also possible
// Calculator.prototype.sum = function(){
//     return +this.input1 + +this.input2;
// }
// Calculator.prototype.mul = function(){
//     return +this.input1 * +this.input2;
// }

const myCalc = new Calculator();
myCalc.read();
console.log(myCalc.sum())
console.log(myCalc.mul())