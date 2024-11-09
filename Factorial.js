function factorial(nums){

    if (nums.length<=0){
        return 1
    }

    return nums[nums.length-1]* factorial(nums.slice(0,nums.length-1));

}
console.log(factorial([1,2,3,4,5]))

