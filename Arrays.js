// Arrays is the Non- Primitive data type in Js , it Allows any of the data types even objects as well, and  we have a lot of methods and lot of looping methods on arrays in js 

// we can use array methods like map, filter, reduce, find, some, every, sort
// we can use array looping methods like for, for of, for in, while, do while
// we can use array methods like push, pop, shift, unshift, splice, concat,
// we can use array methods like indexOf, lastIndexOf, includes, join, reverse, sort,
// we can use array methods like slice, concat, fill, every, some, find, find

let arr = [1,"Apple","bannana", {name:"Anil",age:22}]
console.log(arr.length) // it will print 8 because it is the length of the array

console.log(arr[0]) // it will print 1 because it is the first element of the

// By using Indexing we can access elementsin the arrays

console.log(arr[2]) // Apple 

//Push -> By using this we can add element last of the array 
arr.push("cherry")
console.log(arr) // it will print [1, "Apple", "bannana", {name:"Anil",age:22} , "cherry"] 

//Pop -> By using the pop method we can remove the Last element 
arr.pop()
console.log(arr) // it will print [1, "Apple", "bannana", {name:"Anil",age:22}] 

//Unshift -> By using the unshift we can add the elements on the top of the Array
arr.unshift("first")
console.log(arr) // it will print ["first", 1, "Apple", "bannana", {name:"Anil",age:22}]

//shift -> By using the Shift we can remove the element of the top of the array 
arr.shift()
console.log(arr) // it will print [1, "Apple", "bannana", { ..... 

// Loopign of the Arrays 
// for loop

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    }

// while Loop 

let i=0 
while (i<arr.length) {
    console.log(arr[i])
    i++
}
// for of loop
for (const element of arr) {
    console.log(element)
    }



// for in loop
for (const key in arr) {
    console.log("key in array",arr[key])
}

//array looping methods in Js 
//forEach() -> it will call the function for each element of the array

arr.forEach(function(element) {
    console.log(element)
    })


//map() -> it will return the new array with the result of the function call on each element

const mapArray = arr.map((item,index,array) => {
    return item
})

console.log(mapArray)

console.log(typeof("Anil"))

//filter -> filter is used to filter the elemsnts in the array like if we want to return only the elements type num or elements like greater than 0 Zero like that

let filterArray = arr.filter((item,index,array) => {
    return typeof(item)==="string"
})

// reduce -> By usin this reduce function we can reduce the arrays length or we can modify the elements with previous elements 

let reduceArray = arr.reduce((prev,item,i) => {
    return  prev + item
},0)

console.log(reduceArray)

// some -> some is used to the find the element is present or not , like i f we want number is gretean than 1 , it will give true because if even one element is greater than one , it will givw output as true 

let numArr = [1,2,3,4,5,6,7]

let numArrSome = numArr.some((item,index,array)=> {
    return item > 100
})

console.log(numArrSome) // false because , there is no numbers greater than 100

// every -> every method is similar to the som emethod , but every method willl checks the every element in the array, if we put condition like item > 100 , then every element shoud greater than 100 , otherwise it will giv e false

let numArrEvery = numArr.every((item,index,array) => {
    return item >0
})

console.log(numArrEvery) // true , beacuse all elements are greater than  0 

// find -> find checks , it will return the element if there in array ,but if its not there in array mens it will return undefined

let numArrFind = numArr.find((item,index,array) => {
    return item == 10
})

console.log(numArrFind) // undefined

//findIndex -> it will return index of the element in the array(first ocuurance) / if item not there in array mesns, it will give -1
let numArrFindIndex = numArr.findIndex((item) => {
    return item ==10
})

console.log(numArrFindIndex)//-1


// SPREAD AND REST operator => ...
// spread operator is used to spread the elements of the array in the object or in the array ,
// rest operator is used to get the remaining elements of the array in the function parameters

//SPREAD
const one = [1,2,3]
const two = [4,5,6]

const merge = [...one,...two]

console.log(merge)
// [1, 2, 3, 4, 5, 6]


//REST 


function add(...args) {
    for (let i of args){
        console.log(i)
    }
}

add(1,2,3,4,5,6)


//concat -> concat is used to combine the two arrays

const final = arr.concat(numArr)
console.log(final)


//slice -> is  a method , to extract a copy of the orginal content , not only arrays we can perform this action even strings

const sampleSlice = final.slice(1,3)
console.log(sampleSlice)


//Splice - > by using this splice function we can remove elemenst and as well as add elements , it allows three arguments
// (StartFromindex,DeleteCount, addmingElements)

let sample = [1,2,3,45,6,7,8]

sample.splice(2,3,"Anil")
console.log(sample) // [ 1, 2, 'Anil', 7, 8 ]