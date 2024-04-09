let obj = {
    userName : "username"
}

console.log('userName' in obj) // true
console.log('firstName' in obj) // false

console.log(obj.userName!==undefined) // true.. meaning that userName exists in obj
console.log(obj.firstName!==undefined) // false meaning that firstName does not exist in obj


obj.firstName = undefined

console.log('firstName' in obj) // true
console.log(obj.firstName!==undefined) // false even if there is a property named firstName (its value is undefined)

for( p in obj) {
    console.log(p)
}