(function() {
    "use strict";

    // Create an object with firstName and lastName properties
    var person = {
        firstName: "John",
        lastName: "Doe",
        sayHello: function() {
            return "Hello from " + this.firstName + " " + this.lastName + "!";
        }
    };

    console.log(person.firstName);  // Output: John
    console.log(person.lastName);  // Output: Doe
    console.log(person.sayHello());  // Output: Hello from John Doe!

    // HEB shoppers offer
    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
        let discount = 0;
        let total = shopper.amount;

        if (shopper.amount > 200) {
            discount = shopper.amount * 0.12;
            total -= discount;
        }

        console.log(`Shopper: ${shopper.name}, Amount before discount: ${shopper.amount}, Discount: ${discount}, Amount after discount: ${total}`);
    });

    // Array of books
    let books = [
        {title: "The Salmon of Doubt", author: {firstName: "Douglas", lastName: "Adams"}},
        {title: "Walkaway", author: {firstName: "Cory", lastName: "Doctorow"}},
        {title: "A Brief History of Time", author: {firstName: "Stephen", lastName: "Hawking"}},
        {title: "To Kill a Mockingbird", author: {firstName: "Harper", lastName: "Lee"}},
        {title: "1984", author: {firstName: "George", lastName: "Orwell"}}
    ];

    books.forEach(function(book, index) {
        console.log(`Book # ${index + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log('---');
    });

    // Bonus
    function createBook(title, firstName, lastName) {
        return {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        };
    }

    function showBookInfo(book, index) {
        console.log(`Book # ${index + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log('---');
    }

    books = [
        createBook("The Salmon of Doubt", "Douglas", "Adams"),
        createBook("Walkaway", "Cory", "Doctorow"),
        createBook("A Brief History of Time", "Stephen", "Hawking"),
        createBook("To Kill a Mockingbird", "Harper", "Lee"),
        createBook("1984", "George", "Orwell")
    ];

    books.forEach(showBookInfo);

})();
