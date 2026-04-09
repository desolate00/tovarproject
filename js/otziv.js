// Рейтинг звёзд
const stars = document.querySelectorAll('.rating-select .star');
const ratingInput = document.getElementById('rating');

stars.forEach(star => {
  star.addEventListener('click', function() {
    const rating = parseInt(this.dataset.rating);
    ratingInput.value = rating;
    updateStars(rating);
  });

  star.addEventListener('mouseenter', function() {
    const rating = parseInt(this.dataset.rating);
    highlightStars(rating);
  });
});

document.querySelector('.rating-select').addEventListener('mouseleave', function() {
  updateStars(parseInt(ratingInput.value));
});

function highlightStars(rating) {
  stars.forEach(star => {
    const starRating = parseInt(star.dataset.rating);
    star.classList.toggle('dimmed', starRating > rating);
  });
}

function updateStars(rating) {
  stars.forEach(star => {
    const starRating = parseInt(star.dataset.rating);
    star.classList.toggle('dimmed', starRating > rating);
  });
}

// Отправка отзыва
document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const rating = parseInt(document.getElementById('rating').value);

  if (name && message) {
    const now = new Date();
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const dateStr = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    const starsStr = '★'.repeat(rating) + '☆'.repeat(5 - rating);

    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';
    reviewDiv.innerHTML = `
      <div class="review-header">
        <div class="review-avatar">${name.charAt(0).toUpperCase()}</div>
        <div class="review-info">
          <span class="review-name">${name}</span>
          <span class="review-date">${dateStr}</span>
        </div>
        <div class="review-rating">${starsStr}</div>
      </div>
      <p class="review-text">${message}</p>
    `;

    document.getElementById('reviews-container').appendChild(reviewDiv);
    document.getElementById('reviewForm').reset();
    document.getElementById('rating').value = 5;
    updateStars(5);
  }
});
