let message = 'this is my name and you ought to respect that dog';
let reverseMessage = '';
let spaceRemoved = ''

for (let i in message){
    console.log(`the ${-1*(+i+1)}th element is ${message.at(-1*(+i+1))}`)
    reverseMessage += message.at(-1*(+i+1))
}

console.log(reverseMessage)

for (let char of message){
  spaceRemoved += char!= ' ' ? char : ''
}

console.log(spaceRemoved)

message[0] = 'T' // doesn't replace the first char
console.log(message) // message is unchanged since strings are imutable

message = 'T' + message.substring(1); // if you want to change a string you got to create a new string and asign it to it.
console.log(message)

console.log(message.charAt(5)===message.at(5))

let str = 'As sly as a fox, as strong as an ox';

let target = 'as';

const postitions = [];
for(let i = 0 ; i<str.length-1;){
    let pos = str.indexOf(target,i)
    if (pos!=-1){
        postitions.push(pos)
        i=pos+1
    } else {
        i = str.length
    }
   
}

console.log(postitions)

// for substrings use slice

console.log(str.slice(0,str.length)===str) // true
console.log(str.slice(3,6)) // sly

console.log('************Answers************');
console.log('1.')

function toUpFirst(str){
    if(!str)
    return str
    return str[0].toUpperCase() + str.slice(1,str.length) // I can use str.slice(1)
}

console.log(toUpFirst('john'))
console.log(toUpFirst('surafel'))
console.log(toUpFirst(''))

console.log('2.')

function checkSpam(str){
 const tabooWords = ['viagra', 'xxx'];
 return tabooWords.some(word =>str.toLowerCase().includes(word.toLowerCase()))
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))

console.log('3.')

function truncate(str,maxLength){
   if(str.length<maxLength-1) return str;
   return str.slice(0,maxLength-1) + '...'
}
console.log(truncate("What I'd like to tell on this topic is:", 20))//= "What I'd like to te…"

console.log(truncate("Hi everyone!", 20)) //= "Hi everyone!"

console.log('4.')

console.log('$120'.slice(1) === '120'); // true