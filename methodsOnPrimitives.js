const number = 12;
// console.log(number.toFixed(3))

const num1 = new Number(3)
const num2 = Number(3)


out(number, num1,num2, ConstFunc(5), new ConstFunc(5))

// this is how Number constructor function is created
function ConstFunc(val){
     this.val = val;
     this.sayTheNumber = function(){
        console.log(this.val)
     }

     return this.val;
}


function out () {
    console.log(arguments)
    Object.values(arguments).forEach(arg=>{
        console.log(`${arg}: => ${typeof arg} `)
    })
  }
  // returns empty object
  console.log(new Checker())

  function Checker(){
    // when it is called with new
    // implicitly creates empty object and assigns it to this
    // returns this 
  }
