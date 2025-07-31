import { data } from '../Scripts/data.js';



let les_produits = data ; 




// ----------------juste for you------------------


export function justForYou() {

  
let box_just_for_you = document.querySelector('.box_just_for_you');
let just_for_you = document.querySelector('.just_for_you');

if (just_for_you && box_just_for_you) {

  const produitsFemmeVetement = les_produits.filter(
    produit => produit.categorie.genre === "Femme" && produit.categorie.type === "Vêtement"
  );

  
  
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

  
}

justForYou();

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


// -------------------------afficher  le panier -----------------------------




const box_panier_in = document.querySelector(".box_panier_in");
const box_panier_in_bottom = document.querySelector(".box_panier_in_bottom");
const sous_total = document.querySelector(".sous_total");




export  function  afficherItemPanier(){

  const email = localStorage.getItem('utilisateurConnecter');
  const panier = JSON.parse(localStorage.getItem(`panier_${email}`)) || [];
  
  if (panier && panier.length > 0) {

      box_panier_in.innerHTML = "";

    panier.forEach((panierItem , index) => {

      
        // box_panier_in_bottom.innerHTML = "";

        const div = document.createElement('div');
        div.classList.add("box_panier_item", "h-35", "flex", "justify-between", "hover:cursor-pointer", "overflow-hidden", "hover:shadow-sm", "mb-3");
        div.innerHTML = `
          <img class="w-[30%]  rounded-sm h-full duration-300  object-cover" src=${panierItem.image} alt="${panierItem.titre}" srcset="">

                        <div class=" p-3 w-full hover:bg-neutral-50">
                            <h1 class="text-sm lg:text-md mb-3">${panierItem.titre}</h1>
                            <p class="panier_item_description text-[12px] text-neutral-500 mb-2">${panierItem.detail}</p>
                            <div class="btn_add_remove flex items-center gap-2 mb-2">
                              <button data-index=${index} class="ajouter_produit cursor-pointer hover:bg-(--orange) duration-200  flex cursor-pointer items-center justify-center  border border-1 border-neutral-300 rounded-full  w-7 h-7 text-sm  ">
                                <img class="w-3" src="/Assets/Resources/icones/plus .svg" alt="" srcset="">
                              </button>
                              <input class="border-none  w-10 px-3" type="text" disabled value="${panierItem.quantiter}">
                              <button data-index=${index} class="diminuer_produit cursor-pointer hover:bg-(--orange) duration-200  flex items-center justify-center  border border-1 border-neutral-300 rounded-full  w-7 h-7 text-sm  ">
                                <img class="w-3" src="/Assets/Resources/icones/minus.svg" alt="" srcset="">
                              </button>
                            </div>
                            <span class="text-(--orange) text-md ">${(panierItem.prix * panierItem.quantiter).toFixed(2)} cfa</span>
                        </div>
                </div>   
        `
        box_panier_in.appendChild(div);
      
        });
    
     } else {

        box_panier_in.innerHTML = ` <div class="  h-120 flex items-center justify-center ">
                      <div class="flex flex-col items-center justify-center gap-3">
                         <img class="w-20 h-20" src="/Assets/Resources/icones/panier_vide.jpg" alt="" srcset="">
                         <p>Panier vide</p>
                      </div>
                </div> `

        box_panier_in_bottom.innerHTML = "";

     }





}

afficherItemPanier();


// --------------------augmentation et diminution de quantité--------------


box_panier_in.addEventListener("click", (e) => {
  const email = localStorage.getItem('utilisateurConnecter');
  let panier = JSON.parse(localStorage.getItem(`panier_${email}`)) || [];

  const btnPlus = e.target.closest('.ajouter_produit');
  const btnMoins = e.target.closest('.diminuer_produit');

  if (btnPlus) {
   
    const index = btnPlus.getAttribute("data-index");
    panier[index].quantiter += 1;
    localStorage.setItem(`panier_${email}`, JSON.stringify(panier));
    afficherItemPanier();
    updateCompteurPanier();
    prixTotal();
  }

  if (btnMoins) {
      
    const index = btnMoins.getAttribute("data-index");
    if (panier[index].quantiter > 1) {
      panier[index].quantiter -= 1;
      localStorage.setItem(`panier_${email}`, JSON.stringify(panier));
      afficherItemPanier();
      updateCompteurPanier();
      prixTotal();
    }
  }
});





// ----------------------mettre a jour le Compteur du panier------------------

export function updateCompteurPanier() {

    const email = localStorage.getItem('utilisateurConnecter');
    let panier = JSON.parse(localStorage.getItem(`panier_${email}`)) || [];
    const item_au_panier = panier.length;
    const compteur_panier = document.querySelector('.compteur_panier');
    if (compteur_panier) {
        compteur_panier.textContent = item_au_panier;
    }
}
updateCompteurPanier();

// mette a jour le prix total 

export function prixTotal() {

  const email = localStorage.getItem('utilisateurConnecter');
  const panier = JSON.parse(localStorage.getItem(`panier_${email}`)) || [];
  const sous_total = document.querySelector(".sous_total");


  const total = panier.reduce((acc , item) => acc + (item.prix * item.quantiter), 0) ;

  if(sous_total){
    sous_total.innerHTML = `${total.toFixed(2)} cfa`;
  }




}

prixTotal();