(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    // Adding "The Sun" to the beginning of the planets array.
    planets.unshift('The Sun');
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    // Adding "Pluto" to the end of the planets array.
    planets.push('Pluto');
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    // Removing "The Sun" from the beginning of the planets array.
    planets.shift();
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    // Removing "Pluto" from the end of the planets array.
    planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    // Finding and logging the index of "Earth" in the planets array.
    var earthIndex = planets.indexOf('Earth');
    if (earthIndex !== -1) {
        console.log('Index of Earth: ', earthIndex);
    } else {
        console.log('Earth is not in the planets array.');
    }

    // Reversing the order of the planets array.
    planets.reverse();
    console.log("Reversing the order of the planets array.");
    console.log(planets);

    // Sorting the planets array.
    planets.sort();
    console.log("Sorting the planets array.");
    console.log(planets);

})();
