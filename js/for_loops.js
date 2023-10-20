"use strict";

function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
showMultiplicationTable(7);

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 181) + 20;
    if (randomNumber % 2 === 0) {
        console.log(`${randomNumber} is even`);
    } else {
        console.log(`${randomNumber} is odd`);
    }
}

for (let i = 1; i <= 9; i++) {
    console.log(String(i).repeat(i));
}

for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}
