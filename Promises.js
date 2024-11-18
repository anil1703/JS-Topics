// In js execution we have two types 
// 1 . synchronous  2. asynchronous 


// Synchronous 
// it executes line by line
// it waits for the previous line to complete before executing the next line
// it is blocking in nature
// it is used when we need to execute a task that takes a long time to complete
// example of synchronous code in js
function add(a, b) {
    return a + b;
    }
    console.log(add(5, 7)); // output 12

//Asynchronous
// it executes line by line but it does not wait for the previous line to complete before executing the next line
// it is non-blocking in nature
// it is used when we need to execute a task that takes a long time to complete
// example of asynchronous code in js
// fetching the apis

// it takes time while fetching the api's 
// compiler does not wait for that response 

// That's why , to manage these kind of actions we need to use PROMISES


// Promises
// Promises in javascript is an object and it's represents the result of the operation and it will be returned at some point in future
// it is used to handle asynchronous operations
// Promises have 3 stages
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// whenever the compiler executes the fecth code ,
// then the promises executes , that is the pending state , then it goes to the fulfilled stage or rejected stage depends on the operation

// if it went to the fulfilled stage , then (.then(success)) will execute
// if it went to the rejected stage , then (.catch(error)) will execute

// Example

// const url = "SOME_URL"
// const fetching = fetch(url)         // => when this line executes the promise object created and it is in pending stage
// .then(response => response.json()) // => when the promise object goes to the fulfilled stage then this line
// .catch(error => console.log(error)) // => when the promise object goes to the rejected stage then this line executes
// console.log(fetching) // => it will return the promise object like weather the promise is fullfilled or not


// we can create own promises

const promiseCreation = new Promise((resolved , rejected) => {
    if("a"==="b"){
        return resolved()                   // In this those are promise executors => resolve and reject
                                            // if the resolve called , then (.then ) will execute
                                            // if the reject called , then (.catch ) will execute
    }
    else{
        return rejected()
    }
})

promiseCreation.then(() => {
    console.log("resolved")
})
.catch(() => {
    console.log("rejected")
    })


// And we have an another way to handle the asynchronous code
// that is async/await
// it is used to handle the promises in a synchronous way
// this is the modren way to handle the asynchronous

//Example
// const url = "SOME_URL"
// const fetching = async () => {                        //that async keyword should use before the function 
    //     try {
    //         const response = await fetch(url)            // await is the keyword , by using this keyword , its wait for the result
                                                            // its stops the execution until its fulfilled or rejected 
    //         const data = await response.json()
    //         console.log(data)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    //if its resolved , it will executes try block and if its failed , then its executes catch block