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


// ================
// 1. setTimeont()
// ================

// setTimeout(function (){console.log(`hamburger 45 min to cook`)}, 5000)
// setTimeout(function (){console.log(`pizza 20 min to cook`)}, 5000)
// setTimeout(function (){alert(`Wait for me please!!`)}, 5000)
// console.log(`omelet 3 min to cook`)

// ================
// 2. callback  cb
// ================


//example
//1. create a post
//2. fetch all post

const myPost = [{
    title : `title 1`,
    desc : `description 1`
},{
    title : `title 2`,
    desc : `description 2`
},{
    title : `title 3`,
    desc : `description 3`
}]

// function fetchPost(){
//     console.log(`Hello now you have 3 post`)
//     console.log(myPost)
//    setTimeout(function pushNewPost (){
//        myPost.push({
//            title : `title 4`,
//            desc : `description 4`
//        })
//        console.log(`finally push is ending...`)
//        console.log(myPost)
//    }, 5000)
//
// }
// fetchPost()

function fetchPost(){
    console.log(...`Post is fetching...`)
    console.log(myPost)
}

fetchPost()

//cb is just a callback
function createPost(post, cb){
 setTimeout(function (){
     myPost.push(post)
     //invoke callback
     cb()
 },5000)
}

createPost({
    title : `title 4`,
    desc : `description 4`}
, function (){
        console.log(`I'm a callback, and I will be called after 5 seconds`)
        console.log(myPost)
    })


// ================
// 3. promise() => const example = new Promise((resolve, reject)=>{resolve() reject()})
// when a promise is created, it's in pending state
// when a promise is resolved, it's in fulfilled state
// when a promise is rejected, it's in rejected state
// ================


const userPromise = new Promise((resolve, reject)=>{
    let user = {
        name: `Josh`,
        city : `New York`
    }
    let isFetched = false

    if(isFetched){
        resolve(user)
    }
    else {
        reject(`Error fetching user, Try again later`)
    }
})

//resolve  >>>> then()
//reject   >>>> catch()
userPromise.then(function (valueFromResolve){
    console.log(valueFromResolve)
}).catch((err)=>{
    console.log(err)
})


//------
//function returning a promise
//------

function getUser(){
  return  new Promise((resolve, reject)=>{
        let user = {
            name: `Developer`,
            city: `Los Angeles`
        }
        let isFetched = false
        if (isFetched){
            resolve(user)
        }else {
            reject(`Error!! try again later`)
        }
    })
}
getUser().then((value)=>{
    console.log((value))}).catch((err)=>{console.log(err)})


//consuming multiple promises

// example ↓
//1. fetch all post >> 10s
//2. fetch all comments associated with a post >> 20s
