    document.getElementById('reviewForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && message) {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review';
            reviewDiv.innerHTML = `<p><strong>${name}:</strong> ${message}</p>`;
            document.getElementById('reviews-container').appendChild(reviewDiv);
            document.getElementById('reviewForm').reset();
        }
    });
