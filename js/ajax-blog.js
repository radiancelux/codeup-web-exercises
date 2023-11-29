'use strict';

document.addEventListener('DOMContentLoaded', function() {
    let blogData = loadData();

    displayPosts(blogData);

    // Load data from local storage or fetch from JSON file
    function loadData() {
        let data = localStorage.getItem('blogData');
        if (data) {
            return JSON.parse(data);
        } else {
            fetch('data/blog.json')
                .then(response => response.json())
                .then(posts => {
                    localStorage.setItem('blogData', JSON.stringify(posts));
                    displayPosts(posts);
                    return posts;
                });
        }
    }

    // Save updated data to local storage
    function saveData(data) {
        localStorage.setItem('blogData', JSON.stringify(data));
    }

    // Function to display posts
    function displayPosts(posts) {
        const postsDiv = document.getElementById('posts');
        postsDiv.innerHTML = '';

        posts.forEach(post => {
            let commentsHtml = post.comments.slice().reverse().map(comment =>
                `<div class="bg-gray-200 p-3 rounded shadow mb-2 flex items-center">
                <img src="${comment.avatar}" alt="${comment.username}" class="rounded-full w-10 h-10 mr-3">
                <div>
                    <p><strong>${comment.username}:</strong> ${comment.content}</p>
                    <p class="text-sm text-gray-600">Commented on: ${comment.date}</p>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-gray-600 text-sm">
                            <i class="${comment.likes > 0 ? 'fas' : 'far'} fa-heart cursor-pointer" data-post-id="${post.postId}" data-comment-id="${comment.commentId}"></i>
                            <span id="comment-like-${post.postId}-${comment.commentId}">${comment.likes}</span>
                        </span>
                    </div>
                </div>
            </div>`
            ).join("");

            const postContent = `
            <div class="bg-white p-6 rounded shadow mb-4" data-post-id="${post.postId}">
                <div class="flex items-center">
                    <img src="${post.avatar}" alt="${post.username}" class="rounded-full w-10 h-10 mr-3">
                    <h2 class="text-2xl font-bold">${post.title} - <span class="text-sm">${post.username}</span></h2>
                </div>
                <p class="text-gray-700 mt-2">${post.content}</p>
                <p class="text-gray-500 text-sm">Posted on: ${post.date}</p>
                <p class="text-gray-500 text-sm"><strong>Categories:</strong> ${post.categories.join(', ')}</p>
                <div class="mt-2 flex justify-between items-center">
                    <span class="text-gray-600 text-sm">
                        <i class="${post.likes > 0 ? 'fas' : 'far'} fa-heart cursor-pointer" data-post-id="${post.postId}"></i>
                        <span id="post-like-${post.postId}">${post.likes}</span>
                    </span>
                </div>
                <div class="mt-4 flex items-center">
                    <input type="text" id="new-comment-${post.postId}" class="border p-2 w-full" placeholder="Add a comment">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Comment</button>
                </div>
                <div class="mt-4">${commentsHtml}</div>
            </div>`;
            postsDiv.innerHTML += postContent;
        });

        attachEventListeners();
    }

    function attachEventListeners() {
        // Like post and comments
        document.querySelectorAll('.fa-heart').forEach(heart => {
            heart.addEventListener('click', function(event) {
                const postId = event.target.getAttribute('data-post-id');
                const commentId = event.target.getAttribute('data-comment-id');

                if (postId && !commentId) {
                    likePost(postId);
                } else if (postId && commentId) {
                    likeComment(postId, commentId);
                }
            });
        });

        // Add comment
        document.querySelectorAll('[id^="new-comment-"]').forEach(input => {
            const postId = input.id.split('-').pop();
            const addButton = input.nextElementSibling;

            addButton.addEventListener('click', function() {
                showModal(postId, input.value);
            });
        });
    }

    function showModal(postId, commentContent) {
        const modal = document.getElementById('usernameModal');
        const submitButton = document.getElementById('submitUsername');
        modal.classList.remove('hidden');

        submitButton.onclick = function() {
            const usernameInput = document.getElementById('usernameInput');
            if (usernameInput.value) {
                addCommentToData(postId, commentContent, usernameInput.value);
                modal.classList.add('hidden');
                usernameInput.value = ''; // Clear input for next time
            } else {
                alert("Please enter a username."); // Basic validation
            }
        };
    }

    // Function to like a post
    function likePost(postId) {
        const postIndex = blogData.findIndex(post => post.postId === postId);
        blogData[postIndex].likes++;
        saveData(blogData);
        displayPosts(blogData);
    }

    // Function to like a comment
    function likeComment(postId, commentId) {
        const postIndex = blogData.findIndex(post => post.postId === postId);
        const commentIndex = blogData[postIndex].comments.findIndex(comment => comment.commentId === commentId);
        blogData[postIndex].comments[commentIndex].likes++;
        saveData(blogData);
        displayPosts(blogData);
    }

    // Function to add a comment
    function addCommentToData(postId, commentContent, username) {
        const newCommentId = Date.now().toString();
        const newComment = {
            commentId: newCommentId,
            username: username,
            avatar: "/images/avatar-placeholder.png", // Placeholder avatar
            content: commentContent,
            date: new Date().toISOString(),
            likes: 0
        };

        const postIndex = blogData.findIndex(post => post.postId === postId);
        blogData[postIndex].comments.push(newComment);
        saveData(blogData);
        displayPosts(blogData);
    }
});
