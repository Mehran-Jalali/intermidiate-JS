// if(`conditon`){
// code to run
//}

// let age = 20
// let play
// if(age >= 18){
//  play = true
//     console.log(`You are qualified`)
// }else {
//     play = false
//     console.log(`You are NOT qualified`)
// }

let minAge = 18
let maxAge = 29
let currentAge =18
if (currentAge <= maxAge && currentAge >= minAge){
    console.log(`you are qualified to watch the movie!!`)
}else if ( currentAge > maxAge ) {
    console.log(`you are too old to watch the movie!!`)
}else if (currentAge < minAge){
    console.log(`you are too young to watch the movie!!`)
}

let currentGrade = 80

if(currentGrade => 80){
    console.log(`congratulation; You're getting full scholarship ☺`)
}else {
    console.log(`unfortunately you're getting partial scholarship!!`)
}

// Truthy & Falsy Value

// Falsy Value : 0 , null , `` , undefined , false