import { config } from './config.js';

function getLastCommitDate(username) {
    const url = `https://api.github.com/users/${username}/events/public`;
    const token = config.GITHUB_TOKEN;

    return fetch(url, {
        headers: {'Authorization': `token ${token}`}
    })
        .then(response => response.json())
        .then(events => {
            const pushEvents = events.filter(event => event.type === 'PushEvent');
            if (pushEvents.length === 0) return null;
            return pushEvents[0].created_at; // Date of last commit
        });
}

document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    getLastCommitDate(username)
        .then(date => {
            document.getElementById('modalContent').textContent = date ? `Last commit date: ${date}` : 'No commits found';
            document.getElementById('modal').classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('modalContent').textContent = 'An error occurred!';
        });
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});
