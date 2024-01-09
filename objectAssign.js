let user = {
    name : 'John'
}

const viewPermission = {
    canView : true
}

const editPermision = {
    canEdit : true
}

 const assigned = Object.assign(user, viewPermission, editPermision)
 const newObject = Object.assign({name: 'John'}, viewPermission, editPermision)

out(user, assigned, newObject)

console.log(user===assigned)
console.log(user===newObject)

let structuredObject = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };

  let clone = structuredClone(structuredObject)

  out(structuredObject, clone)
  console.log(structuredObject === clone)

  let functionObject = {
    f :  ()=>console.log("hello")
  }

   // can not be structured clone because it has function in it
  const clonedFunctionObject = structuredClone(functionObject)
  out(clonedFunctionObject)

function out () {
  Object.values(arguments).forEach(elem=>console.log(elem))
}

