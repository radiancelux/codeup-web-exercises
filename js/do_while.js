// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
console.log(`Total cones to sell: ${allCones}`);

do {
    // This expression will generate a random number between 1 and 5
    let conesBought = Math.floor(Math.random() * 5) + 1;

    if (conesBought > allCones) {
        console.log(`Cannot sell you ${conesBought} cones, I only have ${allCones}...`);
    } else {
        allCones -= conesBought;
        console.log(`${conesBought} cones sold...`);
    }
} while (allCones > 0);

console.log('Yay! I sold them all!');
