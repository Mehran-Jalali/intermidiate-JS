//accessing arrays

let books = [`mongoDB`, `nodeJS`, `REACT`, `python`, `sass`,`html`]

console.log(books[0],books[1],books[2],books[3])

let totalBooks = books.length
for(let i = 0; i < totalBooks ; i++){
    console.log(i)
    console.log(books[i])
}

//==============
//Array methods
//==============

let foods = [`pizza`,`pancakes`,`Yorkshire Pudding`,`Fish and Chips`,]

//==============
//push : add a new record into the array At the end
//==============

foods.push(`omelet`)
console.log(foods)

//==============
//pop : remove the last record of the array
//==============

foods.pop()
console.log(foods)

//==============
//unshift : add a new record into the array At the beginning
//==============

foods.unshift(`Haggis`)
console.log(foods)

//==============
//shift : remove the first record of the array
//==============

foods.shift()
console.log(foods)

//==============
//indexOf
//==============

console.log(foods.indexOf('Omelet'))
console.log(foods.indexOf('pizza'))

//==============
//lastIndexOf
//==============

console.log(foods.lastIndexOf(`Fish and Chips`))
console.log(foods.lastIndexOf(`Yorkshire Pudding`))

//==============
//includes : boolean
//==============

console.log(foods.includes(`pancakes`))

//==============
//reverse
//==============

console.log(foods.reverse())

//==============commonly~use
//reduce
//==============
//array.reduce(function(acc, currentValue, currentIndex, arr){
//
//},initialValue)

let productsQty = [12,30]

console.log(productsQty.reduce(function (acc , currVal){
  return acc + currVal
}),0 )

//==============commonly~use
//find : find a single value that matches our condition
//==============
//array.find(function(data){
//
// })

const ages = [10, 20, 24, 29, 30, 40, 50]

console.log(ages.find(function (age){
    return age < 30
}))

//==============commonly~use
//filter : find every value that matches our condition
//==============
//array.filter(function(data){
//
// })

let prices = [ 25 , 40 , 94 ,102 ,19]

console.log(prices.filter(function (price){
    return price < 90
}))


//create an array of numbers and then make a for loop to print out the numbers in array

let scores = [10,20,15,18,19,17]

for(let i = 0 ; i < scores.length ; i++  ){
    console.log(scores[i])
}

//create an array of string and then make a for loop to print out the string

let friends = [`Marcus`, `Kate`, `Amy`, `Rick`, `Kim`]

for(let i = 1 ; i< friends.length ;i++ ){
    console.log(`${friends[i]} is the ${i} contact in my phone`)
}

//create a function to reverse the order of an array

let myBooks = [`HTML`, `every things about JavaScript`, `python`, `Linux`, `REACT JS`]

console.log(myBooks.reverse())

//create a function that takes an array of numbers and returns the sum of all numbers in the array

let numbers = [12,30,35]

console.log(numbers.reduce(function ( preVal, curVal){
    return preVal + curVal
} ,0))

//create a function that takes an array of numbers and returns the average of all numbers in the array

let num = [12,17,16,15,18,19,11,19.5]
let index = num.length

const sum = num.reduce(function (preVal, curVal){
   let sum = preVal + curVal
    return sum
},0)

console.log(`The average is ${ sum / index}`)

//create a function to remove all duplicates from an array

let fruits = ["apple", "mango", "apple", "orange", "mango", "mango",2,3,1,5,2,2,3];

const removeDuplicates = function (arr){
    let filteredData = arr.filter((el, ind , arr)=>{
      return  arr.indexOf(el) === ind
    })
    console.log(filteredData)
}
removeDuplicates(fruits)

//create a function that takes an array of words and returns a new array with only the words
//that are 3 letter or shorter

let names = [`js`,`Martin`, `kit`, `du`, `e`, `elin`]

const filteredNames = function (arr){
   let arrWanted = arr.filter(function (el){
       if (el.length <= 3){
           return el
       }
    })
    console.log(arrWanted)
}
filteredNames(names)

