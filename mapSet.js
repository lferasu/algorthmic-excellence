const myMap =  new Map();

myMap.set({},{})
.set({name:'surafel'}, 'surafel')
.set('surafel',{neme:'surafel'})
.set({}, 'empty object')

for (const entry of myMap.values()){
    console.log(entry)
}