import { data } from '../Scripts/data.js';



let les_produits = data ; 

console.log(les_produits);


// ----------------juste for you------------------

let box_just_for_you = document.querySelector('.box_just_for_you');
let just_for_you = document.querySelector('.just_for_you');

if (just_for_you && box_just_for_you) {

  const produitsFemmeVetement = les_produits.filter(
    produit => produit.categorie.genre === "Femme" && produit.categorie.type === "Vêtement"
  );

  console.log(produitsFemmeVetement);
  
  produitsFemmeVetement.forEach((produit) => {

     const items = document.createElement('div');
     items.classList.add('carousel-item', 'min-w-[80%]', 'sm:min-w-[50%]', 'md:min-w-[25%]', 'flex-shrink-0');
     items.innerHTML = 
     `
      
            <div class="product hover:shadow-sm duration-500 cursor-pointer hover:bg-neutral-100" data-category="apparel">
                                <img src=${produit.image} alt=${produit.titre} class="w-full h-56 md:h-80 object-cover rounded">
                                <div class="text-center mt-4">${produit.titre}</div>
                                <div class="text-center text-(--orange) py-3">${produit.prix} cfa</div>
            </div>   
        
    `;
    just_for_you.appendChild(items);
    box_just_for_you.appendChild(just_for_you);

    items.addEventListener('click', () => {
      window.location.href = `/produit.html?id=${produit.id}`;
    });
  });
}



// les messages toast



// Toasts
export function showToast_error(message) {
    const toast = document.getElementById('toast_error');
    toast.textContent = message;
    toast.className = 'toast_error show';
    setTimeout(() => {
        toast.className = 'toast_error';
    }, 2500);
}

export function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}