// Queue is a linear data Stucture that follows FIFO
// FIFO -> First in first Out 
// Queue is a collection of elements that are added and removed from the front and rear end respectively.
// It follows the principle of FIFO (First In First Out) i.e. the element that is
// added first will be removed first.


class Queue{
    constructor (){
        this.queue = []
    }

    addElementinQ(x){
        this.queue.push(x)
    }

    removeElementFromQ(){
        if(this.queue.length == 0){
            console.log("Queue is Empty , we cant perfrom remove action")
        }
        else{
            return this.queue.shift()
        }
    }

    printQ(){
        console.log(this.queue)
    }

    rearOfQ(){
        console.log(this.queue[this.queue.length-1])
    }

    topOfQ(){
        console.log(this.queue[0])
    }
}

const obj = new Queue()
obj.addElementinQ(10)
obj.addElementinQ(20)
obj.addElementinQ(30)
obj.printQ()
obj.removeElementFromQ()
obj.printQ()
obj.rearOfQ()
obj.topOfQ()