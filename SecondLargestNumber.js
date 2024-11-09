//Find the second largest number in Array 

function findSecondLargest(arr) {
    let largest = Number.NEGATIVE_INFINITY
    let secondLargest = Number.NEGATIVE_INFINITY

    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]){
            secondLargest = largest
            largest = arr[i]
        }
        else if(largest != arr[i] && secondLargest < arr[i]){
            secondLargest = arr[i]
        }
        
    }
    return secondLargest

}
arr = [10,2,4,6,34,35,1,35]

console.log(findSecondLargest(arr)) // 34


//BootForce Approach 

function bruteforce(arr){
    const newSet = new Set(arr)
    const newArray = []
    for (let i of newSet){
        newArray.push(i)
    }

    for (let i =0 ; i<newArray.length;i++){
        for (let j =0 ; j<newArray.length-1;j++){
            if(newArray[j] > newArray[j+1]){
                let one = newArray[j]
                let two = newArray[j+1]
                newArray[j] = two
                newArray[j+1] = one
                
            }
            
        }
    }

    return newArray[newArray.length-2]
    

}

console.log(bruteforce(arr))
