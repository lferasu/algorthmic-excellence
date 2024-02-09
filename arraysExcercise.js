function camelize(str) {
    return str.split('-').map((word, index) => {
        return index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    }).join('')
}

function filterRange(arr, a, b) {
    return arr.filter(elem => elem >= a && elem <= b)
}
const filterRangeInPlace = (arr, a, b) => arr.forEach((elem, index) => (elem <= a || elem >= b) && arr.splice(index, 1))
const sortDesc = (arr => arr.sort((a, b) => b - a))
function _filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= a || arr[i] >= b) {
            arr.splice(i, 1);
        }
    }
    return arr
}

function sortByAge(array){
    return array.sort((a,b)=>a.age - b.age)
}


function Calculator() {
    this.operationFunc = {
        ['+']: (a, b) => +a + +b,
        ['-']: (a, b) => +a - +b
    };
    this.calculate = function (str) {
        const exp = str.split(' ');
        a = exp[0];
        b = exp[2];
        operator = exp[1];

        return this.operationFunc[operator](a, b)
    }
    this.addMethod = function (name, func) {
        this.operationFunc[name] = func
    }

}
const calc = new Calculator()

console.log(calc.calculate('9 + 2'))
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

let result = calc.calculate("2 ** 3");
console.log(result)

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

names = users.map(elem => elem.name);
console.log(names)

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [john1, pete1, mary1];

const usersMapped = users1.map(elem => {
    return {
        fullName: `${elem.name} ${elem.surname}`,
        id: elem.id
    }
})

console.log(usersMapped)
const usersReduced = users1.reduce((accum, elem) => {
    accum.push({ fullName: `${elem.name} ${elem.surname}`, id: elem.id })
    return accum
}, [])

console.log(usersReduced)

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr2 = [ pete2, john2, mary2 ];

console.log(sortByAge(arr2))

function shuffle(array){
    return array.sort(()=>Math.random()-0.5)
}

let arr = [1, 2, 3];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

let users3 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  const sum = users.reduce((obj,elem)=>{
    obj[elem.name]= elem
    return obj
  },{})

  console.log(sum)

  
