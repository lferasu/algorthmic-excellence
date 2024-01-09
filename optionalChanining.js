const user  = {
    name : "surafel",
    address : {
        street : "123"
    },
    interests : ["soccer", "biking", "reading"],
    speak(){
        console.log(`myname is ${this.name} and my interests are ${interests}`)
    }
}


console.log(user.address?.street)

// this should work but doesn't we prolly need polyfill
//console.log(user.interests?.[])