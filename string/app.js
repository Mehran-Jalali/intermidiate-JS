// creating string

// using string literal
const name = `Hutchins`

// using the constructor function
const firstName = new String(`Marcus`);

//console.log(name , firstName)

// using string concatenation or + operators

let str1 = `Hello`
let str2 = `Marcus Hutchins`

//let result = str1 + ` ` + str2
// OR...
let result = str1.toLocaleUpperCase().concat(` ` + str2)
console.log(result)

//JS template literals

let age = 29
console.log(`
Hello I'm Marcus and 
I am ${age} years old 
`)

// ======CHALLENGE
//1. creating a function to find the number of the character in a string

const stringLength = function (str){
    return str.length
}
const result1 = stringLength(`Mehran Jalali`)
const result2 = stringLength(`Mehran`)
const result3 = stringLength(`Jalali`)
console.log(result1)
console.log(result2)
console.log(result3)

//2. creating a function to check if a string is longer than a certain number of character

const func = function (string, number){
    if(string.length > number){
        console.log(`wow it's bigger than 22`)
    }
    else if(string.length === number){
        console.log(`The string numbers are 22`)
    }else {
        console.log(`the string numbers are less than 22`)
    }
    return string.length
}

const sentence = func(`Mehran is JS developer`)


console.log(sentence)

// trim/toUpperCase/toLowerCase/indexOf

// trim

//before trim
let abc = `       It's coding time`
console.log(abc.length)
//after trim
const abcTrim = abc.trim()
console.log(abcTrim.length)

// indexOf
let mySent = `JavaScript is Interesting`
console.log(mySent.indexOf(` `))

//===========
//split
//===========

let myRes = `you`
console.log(myRes.split(``))

//===========
//join
//===========

let myResult = myRes.split(``).join(`~`)
console.log(myResult)

//===========
//reverse
//===========

const food = [`pizza`, `eggs`, `Fofo`, `rice`]
console.log(food.reverse())

//creating a function to reverse a string
//to reverse a string we need to split the String to  make an Array and then we can reverse it

const myChallenge = `css and Js are Interesting`
//convert string to Array
const myArray = myChallenge.split(``)
//reverse the converted string
const myReverse = myArray.reverse()
//join my reversed converted string
const myJoin = myReverse.join(``)
console.log(myJoin)

//or
const myFunction = function (stringg){
    return stringg.split('').reverse().join(``)
}
console.log(myFunction(`Css and Js are Interesting`))

//===========
//repeat
//===========

const myWelcome = `Welcome to my Js website `

console.log(myWelcome.repeat(1))

//===========
//startWith
//===========

const myStart = `HELLO`

console.log(myStart.startsWith('H'))

//creating a function to check if the string starts with a certain string
const myStartFun = function (stringgg , start) {
    if (stringgg.startsWith(start)){
        return true
    }
    else {
        return `String does not start with ${start}!!`
    }
}
console.log(myStartFun(`welcome baby`, `w`))

//===========
//includes
//===========

let myCondition = `I☺ learn ☻JavaScript every day!`
console.log(myCondition.includes(`learn` && `☺` && `☻` && `JavaScript` ,0 ), myCondition)
console.log(myCondition.includes(`l`,1))

//creating a function to check if a string includes a certain string

let myChallange = function (words, certainWord){
    if (words.includes(certainWord)){
        return true
    }
    else {
        return false
    }
}
let challange = myChallange(`I'm the most intelligence web developer!`, `developer`)
console.log(challange)

//creating a function to check if a string contains whiteSpace

// function containWhiteSpace (x){
//     if (x.includes(` `)){
//         return true
//     }
//     else {
//         return false
//     }
// }

//========OR
function containWhiteSpace (x){
    if (x.indexOf(`~`) !== -1 ){
        return true
    }
    else {
        return false
    }
}
console.log(containWhiteSpace(`~hello-World!`))

//===========
//slice
//===========

let message = `Welcome to my JAVASCRIPT Web!!!`
console.log(message.slice(5,19))

//===========
//string comparison
//===========

console.log( -1 < -90 )
console.log( `a` > `A` )
console.log( `a` < `z` )