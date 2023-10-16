"use strict";

// TODO: Create a function called 'sayHello' that takes a parameter 'name'.
function sayHello(name) {
    return `Hello, ${name}!`;
}

// TODO: Call the function 'sayHello' and pass your name as a string literal argument.
let helloMessage = sayHello("Brett");

// Check your work
console.log(helloMessage);

// TODO: Store your name as a string in a variable named 'myName', and pass that variable to the 'sayHello' function.
let myName = "Brett";
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

// TODO: Create a function called 'isTwo'
function isTwo(num) {
    return num === 2;
}

// Call the function 'isTwo' passing the variable 'random' as a argument.
console.log("Is random number two?", isTwo(random));

// TODO: Create a function named 'calculateTip'
function calculateTip(tipPercent, totalBill) {
    return tipPercent * totalBill;
}

// TODO: Use prompt and alert in combination with your calculateTip function
let totalBill = parseFloat(prompt("Enter the total bill: "));
let tipPercent = parseFloat(prompt("Enter the tip percentage (as a decimal): "));
let tipAmount = calculateTip(tipPercent, totalBill);

alert(`The amount you should tip is $${tipAmount.toFixed(2)}`);

// TODO: Create a function named 'applyDiscount'
function applyDiscount(originalPrice, discountPercent) {
    return originalPrice * (1 - discountPercent);
}

// Check your work
let originalPrice = 100;
let discountPercent = 0.2; // 20%
console.log(applyDiscount(originalPrice, discountPercent)); // should return 80

console.log(applyDiscount(45.99, 0.12)); // should return 40.4712
