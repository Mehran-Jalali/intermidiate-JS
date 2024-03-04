//object constructor function

const person = new Object()

//add properties

person.name = `Marcus`
person.lastName = 'Hutchins'
person.age = 29
person.isMarried = false
person.hobbies = [`Coding`, `Hacking`, `Sports`]
console.log(person)

// ~~OR

let perSon = new Object({
    name : `Marcus`,
    lastName : `Hutchins`,
    age: 29,
    isMarried : false ,
    hobbies : [`Coding`, `Hacking`, `Sports`]
})
console.log(perSon)

// ~~OR Object Literal Syntax =========== Simple To Use ===== Common

let person1 = {
    name : `Marcus`,
    lastName : `Hutchins`,
    age: 29,
    isMarried : false ,
    hobbies : [`Coding`, `Hacking`, `Sports`]
}
console.log(person1)

//==============
//accessing object properties
//==============

console.log(person1.age)
console.log(person1.isMarried)
console.log(person1.hobbies)

// ~~OR using brackets notation => objectName[`property`]

console.log(person1[`age`])
console.log(person1[`isMarried`])
console.log(person1[`hobbies`])


//==============
//updating object properties
//==============

//1.Using dot notation
person1.name = `John`
person1.age = 45
person1.hobbies = ['Hiking', `Camping`, `Gardening`]

console.log(person1)

//2.Using brackets notation
person1[`name`] = `Bill`
person1[`age`] = `60`
person1[`hobbies`] = [`sleeping`]

console.log(person1)

//==============
//delete object properties
//==============

//1.Using dot notation
delete person1.name
delete person1.age
delete person1.hobbies

console.log(person1)

//2.Using brackets notation
delete person1[`name`]
delete person1[`age`]
delete person1[`hobbies`]

console.log(person1)

//==============
//adding method to object
//==============

let audience ={
    firstName : `Kris`,
    lastName : `Dolton`
}
audience.printFullName = function (){
    console.log(`Your full name is ${this.firstName} ${ this.lastName}`)

}
audience.printFullName()

// ~~~~~~~~~OR

let audience1 ={
    firstName: `Gigi`,
    lastName: `Sins`,
    isAdmin : true,
    status : false,
    viewsCount : 18000 ,
    printFullName : ()=>{
        console.log(`Your full name is ${audience1.firstName} ${audience1.lastName}`)
    },
    checkStatus : function (){
        if(this.status === false){
            delete this.isAdmin
        }
    }
}
audience1.checkStatus()
audience1.printFullName()
console.log(audience1)

//===========
//iterating over object properties
//===========

const person2 = {
    //keys ↓  :  values ↓
    firstName : `Kim`,
    lastName : `Sins`,
    age : 30,
    isAdmin: true,
    status: false,
    hobbies : [`gardening`, `youtube`],
    isMarried: false
}

// 1. for in loop
// 2. Object.keys
// 3. Object.values
// 4. Object.entries

// for in loop syntax

for (let keys in person2){
    console.log(keys)
}

// Object.keys(objectName) : It will show our keys together in an array

let myKeys = Object.keys(person2)
console.log(myKeys)

// remember that forEach Function only works on array not object ; so you should transform the keys
// or values to an array and then use forEach function

myKeys.forEach(function (data){
    console.log(data)
    }
)

// Object.values(objectName) : It will show our values together in an array

let myValues = Object.values(person2)
console.log(myValues)

myValues.forEach(function (data){
    console.log(data)
    }
)

// Object.entries : It will show the keys and values in separate arrays

let myEntries = Object.entries(person2)

console.log(myEntries)

// now we can show them all together with forEach function

myEntries.forEach(function (entries){
    console.log(entries)
})

//******* or more Destructuring assignment

myEntries.forEach(function ([key, value]){
    if(value === false){
        console.log(`${key} : No!!`)
    }
    else if(value === true){
        console.log(`${key} : Yes!☻`)
    }
    else
    console.log(`${key} : ${value}`)
})

// Challenge

// create an object and a function that print the name and age properties of the object

const user = {
    name : `John`,
    location : `Los Angeles`,
    age : 29,
    printInfo : function (){
        console.log(`${this.name} is ${this.age} years old`)
    }
}
user.printInfo()

// add a property called married which is boolean value and a method which prints whether
// the user married or not

user.married = true

user.isMarried = function (){
    if(this.married === false){
        console.log(`${this.name} is not married!!.`)
    }
    else if(this.married === true){
        console.log(`${this.name} is married.`)
    }
}
user.isMarried()

// write a function that iterate over an object and prints out each key-value pair in the
// format "key : value"

let me = {
    name:`Developing Web`,
    author:`MehranDEV`,
    numPages:200,
    JBNQ : `IN256`,
}
let userEntries = Object.entries(me)

userEntries.forEach(function ([key, value]){
    console.log(`${key} : ${value}`)
})
