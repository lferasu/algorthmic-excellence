


let fruit = "apple";
let another = 'orange'

bag = {
    [fruit] :  5,
}

console.log(bag[fruit])
console.log(bag.apple)

fruit = another

console.log(bag[fruit])
console.log(bag.apple)

let obj = {
    this: "is",
    '7' : "seven",
    [3+4]: "eight"
}

console.log("three plus four", obj[3+4])
console.log("three plus five equals", obj['7'])


obj.__proto__ = 5
console.log(obj.__proto__)

