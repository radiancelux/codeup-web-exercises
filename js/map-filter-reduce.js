'use strict';

// Create an array of 4 people's names and store it in a variable called 'names'.
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const usersWith3Languages = users.filter(user => user.languages.length >= 3);
console.log('Users with 3 languages: ', usersWith3Languages);

// Use .map to create an array of strings where each element is a user's email address
const emails = users.map(user => user.email);
console.log('Emails: ', emails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
console.log('Total Years: ', totalYears);

// Use .reduce to get the longest email from the list of users.
const averageYears = totalYears / users.length;
console.log('Average Years: ', averageYears);


// Use .reduce to get the longest email from the list of users.
const longestEmail = emails.reduce((longest, email) => {
    if (email.length > longest.length) {
        longest = email;
    }
    return longest;
}, '');

console.log('Longest Email: ', longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const instructors = users.reduce((sentence, user) => {
    if (sentence !== '') {
        sentence += ', ';
    }
    sentence += user.name;
    return sentence;
}, '');

console.log(`Your instructors are: ${instructors}.`);

// Bonus - Use .reduce to get the unique list of languages from the list of users.
const uniqueLanguages = users.reduce((languages, user) => {
    for (const language of user.languages) {
        if (!languages.includes(language)) {
            languages.push(language);
        }
    }
    return languages;
}, []);

console.log('All languages', uniqueLanguages);
