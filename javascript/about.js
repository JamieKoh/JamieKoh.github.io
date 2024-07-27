let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.img-container').length;

function moveSlide(step) {
    currentIndex = ((currentIndex + step + totalSlides) % totalSlides);
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 25}%)`;
}

// Touch events for swipe functionality
let startX;
slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slides.addEventListener('touchmove', (e) => {
    if (!startX) return;
    let endX = e.touches[0].clientX;
    let diff = startX - endX;

    if (diff > 50) {
        moveSlide(1);
        startX = null;
    } else if (diff < -50) {
        moveSlide(-1);
        startX = null;
    }
});
