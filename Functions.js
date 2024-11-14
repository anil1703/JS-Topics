// weh have three types of function declaration in javascript

// -> Function -> function expression -> Arrow function

// Normal funcation 

function add1 (a,b){
    return a+ b 
}

console.log(add1(2,3))


//Function Expression 

const add2 = function(a,b){
    return a + b
}

console.log(add2(2,3))

// Arrow function 

//one way 
const add3 = (a,b) => {
    return a+b 
}
console.log(add3(2,3))

// second way 

const add4 = (a,b) => (a+b)
console.log(add4(2,3))


// -> More concepts about Objects

// -> Factory function 
// factory funcation is a funcation , to create objects 
// it is used to create multiple objects with same properties and methods
// Note name of the function should camelCase convention


function createPerson  (fullName,age)  {
    return {
        fullName: fullName ,
        age: age ,
        address: "India"
    }
}

const person1 = createPerson("Anil",20)
const person2 = createPerson("Cherry",25)
console.log(person1)
console.log(person2)


// Constructor Function 
// Constructor function is a function which is used to create objects
// it is used to create multiple objects with same properties and methods
// Note name of the function should PascalCase convention
// we need to use new keyword whilw calling the objects

function CreateCar (brand,model){    // => here created automatically - this : {} -> empty object
    this.brand = brand;
    this.model = model;
}                                     // Here implicity return this object

const instance = new CreateCar("Audi",2024)
console.log(instance)
console.log(CreateCar.name)