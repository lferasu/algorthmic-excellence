// Arrays main purpose is to store and manipulate ordered collections
// can insert at position and also access it at random postion

//Getting the last element

let fruits = ["Apple", "Orange", "Plum"]; 

console.log(fruits.at(-1))
console.log(fruits.at(-1*fruits.length))

let pushOP = fruits.push('Mango'); // ["Apple", "Orange", "Plum", "Mango"]
console.log(fruits) 
fruits.pop(); // ["Apple", "Orange", "Plum"]
console.log(fruits)
fruits.shift() // ["Orange", "Plum"]
console.log(fruits)
fruits.unshift('Kiwi') // ["Kiwi", "Orange", "Plum"]
console.log(fruits)

let emptyArray = [1];
let val = fruits.unshift('Mango')
console.log(val)
console.log(emptyArray.pop())

// looping arrays as well as strings  for of

const array = ['name', 'age', 'mStatus']
array[100] ='religion'
console.log('****************')
for(let elem of array){
    console.log(elem)
}
// array.length = 0; // the easiest way to clear an array
// console.log(array[1])


let thisArray = [1,2]
thisArray.push(function(){
    console.log(this)
})

thisArray[2]()  

// slice of the cake
// slice do not mutate : thats why you can apply it to strings

const sliceArray = [1,2,3,4,5,6,7]

const modified = sliceArray.slice(1,5) 
console.log("modified", modified) // the sliced array [2,3,4,5]
console.log("sliceArray", sliceArray) // array is not mutated

// The splice method :  the swiss army knife of arrays
// splice is delete add and join
// splice mutate the array

const spliced =  sliceArray.splice(1,4,'two', 'three', 'four','five')


console.log("sliceArray",sliceArray) // [1, 'two', 'three', 'four','five',6,7]
console.log("spliced", spliced) //  the deleted elements [ 2,3,4,5]

sliceArray.splice(1,0,...spliced) // putting back the deleted elements 
console.log("spliceArray", sliceArray)


// convert to original array state

sliceArray.splice(5,4); //

console.log(sliceArray)

sliceArray.splice(-1,3,"six","seven")
console.log(sliceArray)
sliceArray 

 