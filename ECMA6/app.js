//  Destruction


// ================
// Array Destruction
// ================
let arr = [10,9,12,12,16,15]

const [a,b,c,d,e,f] = arr


let object = [
    {username : `John`, pass: 123456}
    ,{username : `Aby`, pass: 125466}
]

const [num1,num2]= object



// ================
// Object Destruction
// ================

let name = {
    firstName : `admin`,
    age: 45
}
// let {firstName, age} = name

//for change the key's name we can

const {firstName: myName, age:myAge} = name

// SET DEFAULT VALUES => If the values of an object was undefined we can set a default value to it

let user = {
    userName: undefined,
    age: 67
}

const {userName = `Admin`, age,city = `NY` } = user

// ================
// Parameters Destruction
// ================

let account = {
    accountName : `JadiJadi`,
    age: 55
}

function getUser (user){
    console.log(`user name -`, user.accountName)
    console.log(`user age -`, user.age)

}
getUser(account)

//Instead of doing repeating user.BlahBlah we can destructure parameters
function getUser1 ({accountName, age}){
    console.log(`user name -`, accountName)
    console.log(`user age -`, age)

}
getUser1(account)



// ================
// rest Parameters ...
// ================

function add (a,b,...rest){
    console.log(a,b)
    console.log(rest)
}
add(5,9,5,`me`)

function findMax(...rest){
    console.log(Math.max(...rest))
}
findMax(1,5,7,10, 5,95)



// ================
// arrow function  () =>{} Limitation : 1.arrow functions don't have this keyword
//                                      2.arrow functions don't have arguments
//                                      2.arrow functions can't use as a constructor
// ================



// ================
//spread operator(...) === expand
// ================


// Spread string
console.log(...`welcome To DevelopedByMehran`)

// Spread arrays
console.log([...`NodeJs`])

// Combine arrays  ~~~~~~~~~~~

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

//traditional way concat() method
console.log(arr1.concat(arr2))

// modern way
console.log([...arr1,...arr2])

// mutation arrays

let originalArr = ['Bob', 'Michel', 'Alice','Lisa']

//copy the original array is important to avoid mutation.

let newArr = [...originalArr]

// add new user
newArr.push('Thomas')

console.log(newArr)


// ================
// spread object
// ================

let obj1 = {
    name : `Josh`,
    age: 30
}

let obj2 = {
    city : `LA`,
    country : `USA`
}

//combine object

// traditional way => Object.assign({},obj1,obj2)

console.log(Object.assign({}, obj1,obj2))

// modern way {...obj1, ...obj2}

console.log({...obj1,...obj2})

// *!* if you have two objects with same properties and then combine them together
// *!* the last one wins