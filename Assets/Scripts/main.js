


// hero slider

let current = 0;
const slides = document.querySelectorAll('.slide');
const indicators_hero = document.querySelectorAll('.indicator_hero');

function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === idx) ? '1' : '0';
        slide.style.zIndex = (i === idx) ? '1' : '0';
    });
    indicators_hero.forEach((dot, i) => {
        dot.classList.toggle('bg-black/70', i === idx);
        dot.classList.toggle('bg-white/30', i !== idx);
    });
    current = idx;
}

// Indicateur click
indicators_hero.forEach((dot, i) => {
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
    if (endX - startX > 50) { 
        showSlide((current - 1 + slides.length) % slides.length);
    } else if (startX - endX > 50) { 
        showSlide((current + 1) % slides.length);
    }
    startX = null;
});

// Auto slide (optionnel)
setInterval(() => showSlide((current + 1) % slides.length), 3500);

showSlide(current);



// faire le deplacement entre categorie 

const filtreBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product');


filtreBtns.forEach(btn =>{

    btn.addEventListener('click', () =>{
        filtreBtns.forEach(b => b.classList.remove('border-(--orange)' , 'text-(--orange)', 'border-b-2'));
          btn.classList.add('border-(--orange)' , 'text-(--orange)', 'border-b-2' );

          const filter = btn.getAttribute('data-filter');
          products.forEach(prod => {
            if(filter ==="all" || prod.dataset.category === filter){
                prod.classList.remove('hidden');
            }else {
                prod.classList.add('hidden') ;
            }
          });
    });

});



// just for you slide 



    const carousel = document.getElementById("carousel_home");
    const items = carousel.querySelectorAll(".carousel-item");
    const indicatorsContainer = document.getElementById("indicators_home");

    // Calcule le nombre de "pages" visibles selon la largeur
    function getVisibleCount() {
      const width = carousel.offsetWidth;
      const itemWidth = items[0].offsetWidth;
      return Math.floor(width / itemWidth);
    }

    function createIndicators() {
      indicatorsContainer.innerHTML = "";
      const total = items.length;
      const visible = getVisibleCount();
      const pages = Math.ceil(total / visible);

      for (let i = 0; i < pages; i++) {
        const dot = document.createElement("span");
        dot.className = "w-2 h-2 rounded-full bg-neutral-400 inline-block";
        if (i === 0) dot.classList.add("bg-black");
        indicatorsContainer.appendChild(dot);
      }
    }

    function updateIndicator() {
      const scrollLeft = carousel.scrollLeft;
      const width = carousel.offsetWidth;
      const page = Math.round(scrollLeft / width);

      indicatorsContainer.childNodes.forEach((dot, i) => {
        dot.classList.toggle("bg-neutral-800", i === page);
        dot.classList.toggle("bg-neutral-100", i !== page);
      });
    }

    carousel.addEventListener("scroll", () => {
      updateIndicator();
    });

    window.addEventListener("resize", () => {
      createIndicators();
    });

    // Initialisation
    createIndicators();
