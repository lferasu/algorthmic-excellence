function getRandomNumber(min=0, max=100){
return Math.floor((Math.random()*(max-min)) + min);
}


for (let i=0;i<10;i++){
    console.log(getRandomNumber(0,10))
}