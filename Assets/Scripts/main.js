

// ---------------------------integration du footer------------------


import { my_footer } from '../Scripts/template.js';

const footer = document.querySelector('footer');

if (footer) {

    footer.innerHTML = my_footer();
  
}




// ----------------------integration du header ---------------------------------------

import { my_header } from '../Scripts/template.js';


const big_nav= document.querySelector('.big_nav');

if (big_nav) {

    big_nav.innerHTML = my_header();
  
}




// burguer du nav 


    function toggleMenu() {
      document.getElementById("mobileMenu").classList.toggle("-translate-x-full");
    }

    function switchTab(tab) {
      const tabs = ['women', 'man', 'kids'];
      tabs.forEach(t => {
        document.getElementById(`tab-${t}`).classList.remove('text-orange-500', 'border-orange-500', 'border-b-2');
        document.getElementById(`content-${t}`).classList.add('hidden');
      });
      document.getElementById(`tab-${tab}`).classList.add('text-orange-500', 'border-orange-500', 'border-b-2');
      document.getElementById(`content-${tab}`).classList.remove('hidden');
    }

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

 if(slider){

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

 }


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
   

    // Calcule le nombre de "pages" visibles selon la largeur

  // if (carousel) {


  // const items = carousel.querySelectorAll(".carousel-item");
  // const indicatorsContainer = document.getElementById("indicators_home");

  //       function getVisibleCount() {
  //     const width = carousel.offsetWidth;
  //     const itemWidth = items[0].offsetWidth;
  //     return Math.floor(width / itemWidth);
  //   }

  //   function createIndicators() {
  //     indicatorsContainer.innerHTML = "";
  //     const total = items.length;
  //     const visible = getVisibleCount();
  //     const pages = Math.ceil(total / visible);

  //     for (let i = 0; i < pages; i++) {
  //       const dot = document.createElement("span");
  //       dot.className = "w-2 h-2 rounded-full bg-neutral-400 inline-block";
  //       if (i === 0) dot.classList.add("bg-black");
  //       indicatorsContainer.appendChild(dot);
  //     }
  //   }

  //   function updateIndicator() {
  //     const scrollLeft = carousel.scrollLeft;
  //     const width = carousel.offsetWidth;
  //     const page = Math.round(scrollLeft / width);

  //     indicatorsContainer.childNodes.forEach((dot, i) => {
  //       dot.classList.toggle("bg-neutral-800", i === page);
  //       dot.classList.toggle("bg-neutral-100", i !== page);
  //     });
  //   }

  //   carousel.addEventListener("scroll", () => {
  //     updateIndicator();
  //   });

  //   window.addEventListener("resize", () => {
  //     createIndicators();
  //   });

  //   // Initialisation
  //   createIndicators();

    
  // }

    // ----------------------affichage dupanier------------------

const btn_open_panier = document.querySelector('.btn_open_panier');
const close_panier = document.querySelector('.close_panier');
const box_panier = document.querySelector('.box_panier');

if (btn_open_panier && box_panier) {

  btn_open_panier.addEventListener('click', () => {
    box_panier.classList.remove('hidden');
    setTimeout(() => box_panier.classList.add('active'), 10); 
  });
}
if (close_panier && box_panier) {
  close_panier.addEventListener('click', () => {
    box_panier.classList.remove('active');
    setTimeout(() => box_panier.classList.add('hidden'), 500); // Attend la fin de la transition
  });
}


// collection pour bouton like 

document.querySelectorAll('.heart-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('liked');
  });
});


// ----------------------------- les donnees du produit -----------------------------





// import { data } from '../Scripts/data.js';



// let les_produits = data ; 

// console.log((les_produits));

