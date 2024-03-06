//==========
//math function
//==========


// Math.abs()  absolute value or number

let number = Math.abs(-10.9999)
console.log(number)


// Math.round() round number

let number1 = Math.round(-5.500000000001)
console.log(number1)


// Math.ceil() ceil number for example x = 5.1 => x = 6

let number2 = Math.ceil(5.000000001)
console.log(number2)


// Math.floor() floor number for example x = 5.999 => x = 5

let number3 = Math.floor(-5.1)
console.log(number3)


// Math.sqrt() square root number for example x*x = 9 => x = 3  or x*x = 36 => x = 6

let number4 = Math.sqrt(4)
console.log(number4)


// Math.pow() power number for example x = 2 , y = 5  => 2*2*2*2*2=32

let number5 = Math.pow(2,5)
console.log(number5)


// Math.min() shows the minimum number for example (5, -2) => -2

let number6 = Math.min(5,-1)
console.log(number6)


// Math.max() shows the maximum number for example (5, -2) => 5

let number7 = Math.max(5,-1)
console.log(number7)


// Math.random() shows random number between 0 - 1

let number8 = Math.random()
console.log(number8 )


// Math.random() * (max - min + 1) + min  ==> getting random number between to number

let number9 = Math.random() * (30 - 20 + 1) +  20
console.log(Math.floor(number9))


// create a function to find the maximum of two numbers as a parameters to the function
let a
let b
let ans = function (a,b) {
  return  Math.max(a, b)
}
console.log(ans(15,-90))

// create a function to find the average of two numbers as parameters and convert the average number
// to a whole number

function average (m, n){
    if(Number(m) && Number(n)){
    console.log(Math.floor(( m + n ) /2))
    }else {
        console.log(`The argument should be numbers`)
    }
}
average(5.9955,2)

// create a function to get random number between two numbers
// The function should return a random number between the two numbers.
// The two numbers should be supplied as parameters to the function.
// The random number should be returned as a number.
// Round the random number to the nearest whole number.

function randomNum (max,min){
    console.log(Math.round(Math.random() *( max - min + 1 ) + min))
}
randomNum(20,10)

//Create a function to guess a number when the function runs
//If you get it right alert 'Correct' otherwise 'try again'

function guess (b){
    let a =Math.floor(Math.random() * 10)
    console.log(`the random number is ${a} between 0 - 10`)
    if( a === b ){
        console.log(`correct!!!`)
    }else{
        console.log(`try again`)
    }
}
guess(6)
