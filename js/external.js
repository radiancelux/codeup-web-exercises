console.log("Hello from external JavaScript");

// Welcome alert
alert("Welcome to my Website!");

// User's favorite color
let favoriteColor = prompt("What is your favorite color?");
// Respond to user regarding their favorite color
alert(`Great, ${favoriteColor} is my favorite color too!`);

// Movie rental calculationgit sta
let littleMermaidDays = prompt("How many days did you rent The Little Mermaid?");
let brotherBearDays = prompt("How many days did you rent Brother Bear?");
let herculesDays = prompt("How many days did you rent Hercules?");
let totalCost = (littleMermaidDays * 3) + (brotherBearDays * 3) + (herculesDays * 3);
alert(`The total cost for movie rentals is $${totalCost}`);

// Contractor payment calculation
let googleHours = prompt("How many hours did you work for Google?");
let amazonHours = prompt("How many hours did you work for Amazon?");
let metaHours = prompt("How many hours did you work for Meta?");
let totalPayment = (googleHours * 400) + (amazonHours * 380) + (metaHours * 350);
alert(`Your total payment for this week is $${totalPayment}`);

// User provided Username and Password
let username = prompt("Please enter your username:");
let password = prompt("Please enter your password:");

// Username and Password validation logic
let isPasswordLongEnough = password.length >= 5;
let passwordNotIncludeUsername = !password.includes(username);
let isUsernameShortEnough = username.length <= 20;
let noWhiteSpace = !(username.trim() !== username || password.trim() !== password);

// Password validation results as alerts
alert(`Password is long enough: ${isPasswordLongEnough}`);
alert(`Password does not include username: ${passwordNotIncludeUsername}`);
alert(`Username is short enough: ${isUsernameShortEnough}`);
alert(`No whitespace in username or password: ${noWhiteSpace}`);
