(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // Convert planetsString to an array, and save it in a variable named planetsArray.
    planetsArray = planetsString.split('|');
    console.log('Planets Array:', planetsArray);

    // Create a string with <br> tags between each planet.
    var planetsBreakString = planetsArray.join('<br>');
    console.log('Planets String with <br> tags:', planetsBreakString);

    // BONUS: Create another string that would display your planets in an unordered list.
    var planetsListString = '<ul><li>' + planetsArray.join('</li><li>') + '</li></ul>';
    console.log('Planets as an unordered list:', planetsListString);

})();
