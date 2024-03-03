// function fnNAme (parameters) {
// code to be executed
// }

// ways of creating a function :
// 1) function declaration
// 2) function expression

//=============
// 1) function declaration
// now let's create a fnc to say hello

let name = `Mehran Jalali`
function sayHi (name){
    alert(`Hi Welcome to my WebPage ${name}`)
}

sayHi(name)

//=============
//2) function expression

let greeting = function (){
    console.log(`hey What's Up?`)
}

greeting()


//==================== parameters and arguments

const addNum = function (){
    let x = 15
    let y = 18
    let result = x + y
    alert(result)
}

addNum()

//                       (↓↓↓↓)  parameters
const addNum1 = function (x, y){
 let result = x + y
    alert(result)
}
//     (↓↓↓↓↓↓↓↓↓↓↓↓)  arguments
addNum1(13, 17)

// now let's do more
// create a function that multiply 3 numbers and display in the console

const multiply =function (x,y,z){
    let answer = x * y * z
    console.log(answer)
}

multiply(9,4,2 )

// return means stop the function and Exit from it

const age = function (a,b){
    let respond = a + b
    console.log(`before return`)
    return respond
    // this ↓ code is unreachable
    //console.log(`after return`)
}
let ab = age(2,4)
console.log(ab)
