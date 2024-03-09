
// Example 1
let freeVariable = 'free variable';

function closureFunction(){
    // we have a static scope : 
    // function has closure over the variable 
    console.log(freeVariable)
}


function callingFunction(functionArg) {
    let freeVariable = "not so free";
    functionArg();
}

callingFunction(closureFunction)


//Example 2

function mutateFreeVariable() {
    //mutate the free variable by encoding it to 64Byte
    freeVariable = atob(freeVariable)
}

mutateFreeVariable()

console.log(freeVariable)
