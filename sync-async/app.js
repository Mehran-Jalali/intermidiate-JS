//synchronous function is known as blocking code and it executes line by line

// console.log(`hamburger 45 min to cook`)
// console.log(`pizza 20 min to cook`)
// alert(`Wait for me please!!`)
// console.log(`omelet 3 min to cook`)



// way af writing Asynchronous function
// 1. setTimeont()
// 2. callback
// 3. promise
// 4. Async/Await



// 1. setTimeont()

// setTimeout(function (){console.log(`hamburger 45 min to cook`)}, 5000)
// setTimeout(function (){console.log(`pizza 20 min to cook`)}, 5000)
// setTimeout(function (){alert(`Wait for me please!!`)}, 5000)
// console.log(`omelet 3 min to cook`)


// 2. callback


function sayHello(callback){
    console.log(`Hello`)
    callback()
}

