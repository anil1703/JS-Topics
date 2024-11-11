// Objects are collection of data with a key value paired
// They are mutable, meaning they can be changed after creation
// They are dynamic, meaning they can be added or removed after creation
// They are ordered, meaning the order of the items is preserved
// They are iterable, meaning they can be looped over in a for loop
// Mutable means, the value in the objects are mutable but keys or not and by using the keys only we can update the values

let obj = {
    name : "Anil",
    age : 10 

}

console.log(obj.name); // Anil => extract value from the object
console.log(obj.age); // 10 


obj.name = "Cherry" // by help of this we can update values in the object

console.log(obj.name); // Cherry => update the value of the object

const {name} = obj // This the another way of object destrcturing 
console.log(name); // Cherry


// we can store any data type in the object , which is nothing but that can be any i the form of primitive data type or Non--primirtivr datatype 
/// we can store arrays, objects etc ..

let sampleObj = {
    name : "Anil",
    age : 10,
    hobbies : ["Cricket", "Football", "Basketball"],
    address : {
        street : "Street 1",
        city : "City 1",
        state : "State 1",
        country : "Country 1"
        }
}


sampleObj.hobbies.push("Coding")
sampleObj.address.country ="India"
console.log(sampleObj);


// Now lets see the some copies

let a = {
    name : "jaffa",
    age : 10
}

let b = a 
b.name = "Thota"
console.log(a)

// this is nothing but , reference id shoould be same , thats why whenever try to update the b its automatically updtaes a as well

// We can destructure by using (...) Spread operator 

let c = {...a,name : "Cherry"}

console.log(c) // jaffa



// Loops on Objects 

let loopObj = {one:1,two:2,three:3}

for (let key in loopObj){
    console.log(key, loopObj[key])
}

// one 1
// two 2
// three 3

const firstName =  "Anil"
const lastName  =  "Cherry"
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
    ,halfName :() => {
        console.log(this)
        return firstName + " " + lastName
    }
  };

const personObj = person.fullName()
const person2Obj = person.halfName()

console.log(personObj)
console.log(person2Obj)