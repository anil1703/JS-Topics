const arr = [-1,0,3,5,9,12]
const target = 0

const binarySearch = (arr,target) => {
    let start = 0 
    let end = arr.length-1
    while (start <= end){
        let mid = Math.floor((start + end) / 2)
        if(arr[mid] === target){
            return mid
        }
        else if(arr[mid] < target){
            start = mid + 1
        }
        else{
            end = mid - 1
        }
    }
    return -1
}

console.log(binarySearch(arr,2))

// Time = O(log n )