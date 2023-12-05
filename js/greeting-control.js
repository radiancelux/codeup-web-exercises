import { getRandomGreeting } from './greeting-logic.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('greetingForm');
    const nameInput = document.getElementById('nameInput');
    const greetingOutput = document.getElementById('greetingOutput');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const greeting = getRandomGreeting();
        greetingOutput.textContent = `${greeting}, ${nameInput.value}!`;
    });
});