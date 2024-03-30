//This function adds the two numbers
function add(num1, num2) {
    return num1 + num2;
}

//This function subtracts the two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

//This function multiplies the two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

//This function divides the two numbers
function divide(num1, num2) {
    return num1 / num2;
}

const a = 10;
const b = 5;

console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);
