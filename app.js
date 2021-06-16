const addTwo = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        console.log('Please input a number')
    } else {
    return num1 + num2;
    }
};

console.log(addTwo(25, 25));