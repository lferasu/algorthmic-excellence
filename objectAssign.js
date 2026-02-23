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

  // can not be structured cloned because it has a function in it
  // use a shallow copy for demonstration instead
  const clonedFunctionObject = { ...functionObject }
  out(clonedFunctionObject)

function out () {
  Object.values(arguments).forEach(elem=>console.log(elem))
}
