const array = [1,2,3,4,11];
let indexof = array.indexOf(NaN)
let sortedArray =array.sort()
sortedArray = array.sort((a,b)=>b-a)
console.log(sortedArray)

// reduce

const orders = [
    {amount : 300},
    {amount : 360},
    {amount : 49},
    {amount : 34},
    {amount : 12},
    {amount : 34},
    {amount : 90},
    {amount : 12},
]

let finalVal = orders.reduce((sum,elem)=>{return sum+elem.amount }, 0)

// big test

let readValue =`Felix Malone	60	false	3 
Amy Friedman	60	true	3  
Concepcion Kelley	60	false	2
Kelley Castro	60	false	3
Sondra Marquez	60	true	8
Wesley Boyer	60	false	4
Tad Terry	60	true	6
Dirk Ho	60	true	3
Jackson Mack	60	true	0
Gino Pierce	60	false	1`

let readArray = readValue.split('\n') 

const reducedObj = readArray.reduce((obj,line)=>{
    const lineValues = line.split('\t');
    obj[lineValues[0]] = {
        name : lineValues[0],
        age : lineValues[1],
        married : lineValues[2],
        noOfChildren : lineValues[3]
    }
    return obj
},{})

console.log(Object.values(reducedObj))