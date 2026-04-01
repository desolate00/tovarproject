    // document.getElementById('reviewForm').addEventListener('submit', function(e) {
    //     e.preventDefault();

    //     const name = document.getElementById('name').value.trim();
    //     const message = document.getElementById('message').value.trim();

    //     if (name && message) {
    //         const reviewDiv = document.createElement('div');
    //         reviewDiv.className = 'review';
    //         reviewDiv.innerHTML = `<p><strong>${name}:</strong> ${message}</p>`;
    //         document.getElementById('reviews-container').appendChild(reviewDiv);
    //         document.getElementById('reviewForm').reset();
    //     }
    // });


  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // смена каждые 3 секунды
