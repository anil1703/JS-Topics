var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let push_1 = 0;
    let pop_1 = 0;

    while (push_1 < pushed.length) {
        stack.push(pushed[push_1]);  // Push the current element onto the stack
        push_1++;

        // Pop from stack if the top element matches the current element in popped sequence
        debugger
        while (stack.length > 0 && stack[stack.length - 1] === popped[pop_1]) {
            stack.pop();
            pop_1++;
        }
    }

    // If stack is empty after processing, return true
    return stack.length === 0;
};

// Test case
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); // Output: true
