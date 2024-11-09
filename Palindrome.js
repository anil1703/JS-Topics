const isPalindrome = function(variable){
    // let check = variable
    // if(typeof(variable)=="number"){
        
    //         if(variable < 0){
    //             return false
    //         }

    //     check = variable.toString()
    // }

    // let reverse = ""
    // for (let i = 0; i < check.length; i++) {

    //     reverse =  check[i] + reverse
        
    // }
    // console.log(reverse)

    // if(check==reverse){
    //     return true
    // }
    // else{
    //     return false
    // }
    let orignal = variable

    if(variable<0){
        return false
    }

    let num = 0 
    let lenx = variable.toString().length 
    let lassst = 10
    for (let i = 0; i < lenx; i++) {
        const lastDigit = variable % 10 
        num = (num * lassst) + lastDigit
        console.log(num)
        variable = Math.floor(variable / 10)
        
    }

    if(num ===orignal){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome(122));
