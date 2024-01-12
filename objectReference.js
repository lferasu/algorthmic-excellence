
// function out () {
//   Object.values(arguments).forEach(console.log)
// }

// let obj = {
//     name : 'surafel',
//     age : 36
// }


// let obj1 = obj;

// out(obj,obj1)
// obj1.name="Nathan"
// obj1.age=7
// out(obj,obj1)

let obj1 = {
  name : "user1",
  role : "admin",
}

Object.assign(obj2, obj1)

let obj2 = obj1

console.log(obj1===obj2) // true since obj2 copied reference of obj1 (not a copy of values)
// meaning that they effectivley refer to the same "thing"

obj1.name= "new name"
console.log(obj2.name) // new name

obj2.role = 'new role'
console.log(obj1.role) // new role

//declare a constant object
const constantObj = {};

// and change its reference to something else 
 
//changing its content is allowed
constantObj.name = "user"
constantObj.role = "admin"

console.log(constantObj) // {name: "user",  role : "admin"}
//effectively changing the content of const object. but bear in mind
// we haven't changed the reference