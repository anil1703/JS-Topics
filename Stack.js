// Reverse the words , note not reverse letters reverse words 
// Input = "The Sky is blue" => blue is Sky The <= Output
// Input = "Kalasalingam Academy of Research and Education"

// function reverseWords(n){

//     const convertIntoStack = n.split(" ")

//     const lenx = convertIntoStack.length
//     let reversedWords = ""
//     for (let i = 0; i < lenx; i++) {
//             reversedWords += convertIntoStack.pop() +" "

//     }
//     return reversedWords

// }

// console.log(reversingWords("The Sky is blue"))


// Concept of Stack 
// -> FILO (First In Last Out) is not a stack
// -> LIFO (Last In First Out) is a stack
// -> Stack is a linear data structure which follows the LIFO principle
// -> Stack is a collection of elements that follows the principle of Last In First Out (LIFO)


// Key Operations on Stack Data Structures
// Push: Adds an element to the top of the stack.
// Pop: Removes the top element from the stack.
// Peek: Returns the top element without removing it.
// IsEmpty: Checks if the stack is empty.
// IsFull: Checks if the stack is full (in case of fixed-size arrays).

class Stack{
    constructor(){
        this.stack = []
        }

    addElementIntoStack(x){
        this.stack.push(x)
    }

    removeElementFromStack(){
        if (this.isEmptyOfStack()){
            return "Stack is Empty , can't remove"
        }
        else{
            return this.stack.pop()
        }
    }

    isEmptyOfStack(){
        return this.stack.length === 0
    }

    printTheStack (){
        console.log(this.stack)
    }
}

const obj = new Stack()
obj.addElementIntoStack(1)
obj.addElementIntoStack(2)
obj.addElementIntoStack(3)
obj.printTheStack()
obj.removeElementFromStack()
obj.removeElementFromStack()
console.log( obj.removeElementFromStack());
console.log( obj.removeElementFromStack());
obj.printTheStack()
