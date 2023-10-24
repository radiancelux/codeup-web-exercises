(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            // Area = pi * radius^2
            let area = Math.PI * Math.pow(this.radius, 2);
            return area;
        },

        logInfo: function (doRounding) {
            // If doRounding is true, round the result to the nearest integer.
            let area = this.getArea();
            if (doRounding) {
                area = Math.round(area);
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
