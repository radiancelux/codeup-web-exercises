// Prompt the user for an odd number between 1 and 50
let userNumber;
while (true) {
    userNumber = parseInt(prompt("Enter an odd number between 1 and 50"));
    if (userNumber % 2 !== 0 && userNumber >= 1 && userNumber <= 50) {
        break;
    } else {
        alert("Invalid input. Please try again.");
    }
}

console.log(`Number to skip is: ${userNumber}`);

// Loop to output odd numbers, skipping the one entered by the user
for (let i = 1; i <= 50; i += 2) {
    if (i === userNumber) {
        console.log(`Yikes! Skipping number: ${i}`);
        continue;
    }
    console.log(`Here is an odd number: ${i}`);
}
