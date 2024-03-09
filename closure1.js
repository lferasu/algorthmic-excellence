let x ="hello"

function foo(){
    console.log(x)
}

function bar(functionArg) {
    let x = "good by"
    functionArg()
}

bar(foo)