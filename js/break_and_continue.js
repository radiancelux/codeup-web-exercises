let userNumber;

do {
    userNumber = parseInt(prompt("Enter an odd number between 1 and 50"));
} while (userNumber % 2 === 0 || isNaN(userNumber) || userNumber > 50 || userNumber < 1);

console.log("Number to skip is: " + userNumber);

for (let i = 1; i <= 50; i += 2) {
    if (i === userNumber) {
        console.log(`Yikes! Skipping number: ${i}`);
        continue;
    }
    console.log(`Here is an odd number: ${i}`);
}
