"use strict";

// TODO: Create a function named `analyzeColor`
function analyzeColor(color) {
    if (typeof color !== 'string') {
        return 'Invalid input. Please enter a color name.';
    }
    if (color === 'blue') {
        return 'blue is the color of the sky';
    } else if (color === 'red') {
        return 'Strawberries are red';
    } else if (color === 'orange') {
        return 'Oranges are orange';
    } else if (color === 'yellow') {
        return 'Sunflowers are yellow';
    } else if (color === 'green') {
        return 'Grass is green';
    } else if (color === 'indigo') {
        return 'Indigo is often seen in a rainbow';
    } else if (color === 'violet') {
        return 'Violets are violet, not blue';
    } else {
        return `I don't know anything about ${color}`;
    }
}

// Generating a random color
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// TODO: Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
console.log(analyzeColor(randomColor));

// TODO: Refactor your function to use a switch-case statement
function analyzeColorSwitch(color) {
    // Additional check for invalid input
    if (typeof color !== 'string') {
        return 'Invalid input. Please enter a color name.';
    }
    switch(color) {
        case 'blue':
            return 'blue is the color of the sky';
        case 'red':
            return 'Strawberries are red';
        case 'orange':
            return 'Oranges are orange';
        case 'yellow':
            return 'Sunflowers are yellow';
        case 'green':
            return 'Grass is green';
        case 'indigo':
            return 'Indigo is often seen in a rainbow';
        case 'violet':
            return 'Violets are violet, not blue';
        default:
            return `I don't know anything about ${color}`;
    }
}

// TODO: Prompt the user for a color and alert the result from your function
let userInputColor = prompt('Please enter a color:');
if (userInputColor === null || userInputColor.trim() === '') {
    alert('You did not enter a color.');
} else {
    alert(analyzeColorSwitch(userInputColor.trim().toLowerCase()));
}

// TODO: Write function named `calculateTotal`
function calculateTotal(luckyNumber, totalAmount) {
    if (isNaN(luckyNumber) || isNaN(totalAmount)) {
        return 'Invalid input. Please enter numbers.';
    }
    switch(luckyNumber) {
        case 0:
            return totalAmount;
        case 1:
            return totalAmount * 0.9;
        case 2:
            return totalAmount * 0.75;
        case 3:
            return totalAmount * 0.65;
        case 4:
            return totalAmount * 0.5;
        case 5:
            return 0;
        default:
            return totalAmount;
    }
}

// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);
let userTotalBill = parseFloat(prompt("What is your total bill?"));
if (isNaN(userTotalBill)) {
    alert('That is not a valid number for the total bill.');
} else {
    alert(`Your lucky number is ${luckyNumber}. Your price before the discount was ${userTotalBill}. Your price after discount is ${calculateTotal(luckyNumber, userTotalBill)}`);
}
// TODO: Ask user to enter a number and provide info
if (confirm('Would you like to enter a number?')) {
    let number = prompt('Please enter a number:');
    if (number === null || number.trim() === '') {
        alert('You did not enter a number.');
    } else {
        number = parseFloat(number.trim());
        if (isNaN(number)) {
            alert('That is not a number');
        } else {
            alert(`The number is ${number % 2 === 0 ? 'even' : 'odd'}`);
        }
    }
}
