// Function to change the profile pic after 2 seconds
setTimeout(function () {
    const profilePic = document.getElementById('profile-pic');
    profilePic.src = 'https://t4.ftcdn.net/jpg/01/35/94/97/360_F_135949705_SlvUTB4q5qF1Ae1xPhzjkQCDRCuJAxFT.jpg';
}, 2000);

// Function to change the profile name after 4 seconds
setTimeout(function () {
    const profileName = document.getElementById('profile-name');
    profileName.innerHTML = 'Baby Duck';
}, 4000);

// Function to add a class to profile-desc after 6 seconds
setTimeout(function () {
    const profileDesc = document.getElementById('profile-desc');
    profileDesc.classList.add('custom-description');
    profileDesc.style.color = 'blue'; // Change the text color
    profileDesc.style.fontFamily = 'Arial, sans-serif'; // Change the font
}, 6000);

// Function to toggle background color every 2 seconds
const profileCard = document.getElementById('profile-card');
let backgroundColorIndex = 0;
const backgroundColors = ['#FFD700', '#FF5733', '#33FF57', '#5733FF'];

setInterval(function () {
    profileCard.style.backgroundColor = backgroundColors[backgroundColorIndex];
    backgroundColorIndex = (backgroundColorIndex + 1) % backgroundColors.length;
}, 2000);

// Function to change profile name based on user input
setTimeout(function () {
    const userInput = prompt('Enter a new name for the profile:');
    if (userInput !== null && userInput.trim() !== '') {
        const profileName = document.getElementById('profile-name');
        profileName.innerHTML = userInput;
    }
}, 8000);

// Function to toggle the background color when the button is clicked
const toggleButton = document.getElementById('toggle-btn');
toggleButton.addEventListener('click', function () {
    profileCard.style.backgroundColor = backgroundColors[backgroundColorIndex];
    backgroundColorIndex = (backgroundColorIndex + 1) % backgroundColors.length;
});