const sym1 = Symbol({name : "surafel", age:36})
console.log(sym1.toString())
console.log(typeof sym1)


let user = { // belongs to another code
    name: "John"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;

  console.log(user)


  console.log()