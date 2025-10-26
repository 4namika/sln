// 1. Print numbers from 1 to 10
console.log("1. Numbers 1-10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Sum of array elements
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 3. Find largest number in array
function findLargest(arr) {
    return Math.max(...arr);
}

// 4. Check if number is even or odd
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// 5. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 6. Merge two arrays using spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];

// 7. Filter even numbers using ES6 filter
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

// 8. Rewrite using template literals
const name = "Alice";
const msg = `Hello ${name}, welcome!`;

// 9. Rewrite function using arrow function
const greet = (name) => `Hello, ${name}`;

// Test the functions
console.log("\n2. Sum of [1,2,3,4]:", sumArray([1,2,3,4]));
console.log("3. Largest in [1,5,2,8]:", findLargest([1,5,2,8]));
console.log("4. Is 7 even or odd?:", isEvenOrOdd(7));
console.log("5. Reverse 'hello':", reverseString("hello"));
console.log("6. Merged arrays:", merged);
console.log("7. Even numbers:", evenNumbers);
console.log("8. Template literal message:", msg);
console.log("9. Greet function:", greet("Bob"));
