


// hero slider

let current = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === idx) ? '1' : '0';
        slide.style.zIndex = (i === idx) ? '1' : '0';
    });
    indicators.forEach((dot, i) => {
        dot.classList.toggle('bg-white/70', i === idx);
        dot.classList.toggle('bg-white/30', i !== idx);
    });
    current = idx;
}

// Indicateur click
indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
});

// Swipe support
let startX = null;
const slider = document.getElementById('slider');
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
slider.addEventListener('touchend', (e) => {
    if (startX === null) return;
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) { // swipe right
        showSlide((current - 1 + slides.length) % slides.length);
    } else if (startX - endX > 50) { // swipe left
        showSlide((current + 1) % slides.length);
    }
    startX = null;
});

// Auto slide (optionnel)
setInterval(() => showSlide((current + 1) % slides.length), 2000);

showSlide(current);

