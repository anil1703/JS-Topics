// Rotate a Array By K times 
//  K = 3 Output => [5,6,7,1,2,3,4]

let arr = [1,2,3,4,5,6,7]

function bruteForceApproach(arr,K){

    let check = arr.length - K
    let result = []
    const take = arr.slice(check)
    arr.splice(check,K)
    result = [...take,...arr]
    return result


}

console.log(bruteForceApproach(arr,3))