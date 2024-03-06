//Data Mutation

const arr = [1,2,3,4,5]

//for example the push , pop ,shift and ... are the mutating methods because they change the length
//and the content of array

arr.push(6)
console.log(arr)


//==========
//Array methods
//==========

//  1. forEach()

const students = [
    {name : `Tiffani`, age : 26, debt: true},
    {name : `Marshal`, age : 25, debt: true},
    {name : `Marcus`, age : 24, debt: true},
    {name : `Amy`, age : 22, debt: false}
]


students.forEach((item, ind, array)=>{
    // console.log(`name  :` ,item.name)
    // console.log(`age  :` ,item.age)
})
//If we want just the name of each person and the ind & array is optional



//  2. map() Like forEach function map() also have three optional argument
//   also we can make a copy of our original array and push new items

let newStudents = students.map((user)=>{
    return user
})

newStudents.push({name : `John`})
console.log(newStudents)


//  3. filter()


let debtStudent = students.filter((student)=>{
    return student.debt
})
console.log(debtStudent)


//  4. reduce()


let products = [
    {name : `banana`, price : 26},
    {name : `tomato`, price: 25},
    {name : `apple`, price : 24},
    {name : `Pomegranate`, price : 22}
]

let sumPrice =products.reduce(function (total, products){
    return total + products.price
},0)
console.log(sumPrice)