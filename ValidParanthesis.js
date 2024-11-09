const validParanthesis = function (n) {
    const stack = [];
    const obj = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let i = 0; i < n.length; i++) {
        const char = n[i];
        
        if (Object.values(obj).includes(char)) { // If it's an opening bracket
            stack.push(char);
        } else if (Object.keys(obj).includes(char)) { // If it's a closing bracket
            if (stack[stack.length - 1] === obj[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0; // Return true if stack is empty, otherwise false
};

console.log(validParanthesis("({}[])")); // Expected output: true
console.log(validParanthesis("({[)]}")); // Expected output: false
