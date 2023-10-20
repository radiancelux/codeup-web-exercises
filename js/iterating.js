(function(){
    "use strict";

    // Create an array of 4 people's names and store it in a variable called 'names'.
    var names = ["Alice", "Bob", "Charlie", "Dave"];

    if (Array.isArray(names) && names.length >= 4) {
        // Log the number of elements in the names array.
        console.log("Number of elements in the array: " + names.length);

        // Log each of the names individually by accessing each element's index.
        for (let i = 0; i < 4; i++) {
            if (typeof names[i] === 'string') {
                console.log(`Name at index ${i}: ${names[i]}`);
            } else {
                console.log(`Invalid name at index ${i}`);
            }
        }

        // Use a for loop to log every item in the names array.
        for (let i = 0; i < names.length; i++) {
            if (typeof names[i] === 'string') {
                console.log(`Name at index ${i}: ${names[i]}`);
            } else {
                console.log(`Invalid name at index ${i}`);
            }
        }

        // Refactor the above code to use a `forEach` loop
        names.forEach(function(name, index) {
            if (typeof name === 'string') {
                console.log(`Name at index ${index} (using forEach): ${name}`);
            } else {
                console.log(`Invalid name at index ${index}`);
            }
        });

        // Create functions to return first, second and last elements from an array
        function first(arr) {
            if (Array.isArray(arr) && arr.length > 0) {
                return arr[0];
            } else {
                return 'Invalid array or empty array';
            }
        }

        function second(arr) {
            if (Array.isArray(arr) && arr.length > 1) {
                return arr[1];
            } else {
                return 'Invalid array or array has fewer than 2 elements';
            }
        }

        function last(arr) {
            if (Array.isArray(arr) && arr.length > 0) {
                return arr[arr.length - 1];
            } else {
                return 'Invalid array or empty array';
            }
        }

        // Example usage:
        console.log(first([1, 2, 3, 4, 5])); // returns 1
        console.log(second([1, 2, 3, 4, 5])); // returns 2
        console.log(last([1, 2, 3, 4, 5])); // returns 5

    } else {
        console.log('Invalid array or array has fewer than 4 elements.');
    }

})();
