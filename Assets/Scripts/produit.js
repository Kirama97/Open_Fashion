
import { data } from '../Scripts/data.js'; 
import { mon_detail_produit } from '../Scripts/template.js';
import { showToast_error , showToast , updateCompteurPanier , afficherItemPanier , prixTotal}  from "./back_office.js";




const params = new  URLSearchParams(window.location.search);
const produitId = params.get('id');
const sectionDetailProduit = document.querySelector('.detail_du_produit');




function afficherDetailProduit(id) {

    let produit = data.find(p => p.id == id );

    // console.log(produit);


    if(produit){

        sectionDetailProduit.innerHTML = mon_detail_produit(produit);


            // Affichage des couleurs
            const detail_color = document.querySelector(".detail_color");
            detail_color.innerHTML = "";
            produit.couleurs.forEach(couleur => {
                console.log(couleur);
                const div = document.createElement("div");
                div.classList.add ("couleur_du_produit","rounded-full", "group", "flex", "items-center", "cursor-pointer", "hover:border", "hover:border-1", "hover:border-neutral-400", "p-1", "justify-center", "h-7", "w-7");
                div.setAttribute("data-couleur", couleur);
                const span = document.createElement("span");
                span.classList.add("rounded-full", "w-full", "h-full");
                span.style.backgroundColor = couleur;
                div.appendChild(span);
                detail_color.appendChild(div);
            });

                 // Affichage des tailles

                const detail_taille = document.querySelector(".detail_taille");
                detail_taille.innerHTML = "" ;
                produit.tailles.forEach(taille => {

                    const div = document.createElement("div");
                    div.classList.add("taille_du_produit","rounded-full", "hover:bg-neutral-800" ,"group", "flex", "items-center", "cursor-pointer", "bg-neutral-100", "text-black",  "justify-center", "h-6", "w-6","durantion-300");
                    div.setAttribute("data-taille", taille);
                    const span = document.createElement("span");
                    span.classList.add("text-[12px]","group-hover:text-white");
                    span.textContent = taille;
                    div.appendChild(span);
                    detail_taille.appendChild(div);

                } )



            // creation du panier de l'utilisateur 

              let email = localStorage.getItem('utilisateurConnecter');
              console.log(email)
              let panier = JSON.parse(localStorage.getItem(`panier_${email}`)) || [];

              // ----------- la fonction pour ajouter au panier ----------------------
                
            const produitAuPanier = (produit) => {
           

                // Gestion de la sélection de la taille
                let tailleChoisie = "";
                
                document.querySelectorAll('.taille_du_produit').forEach(taille => {
                    taille.addEventListener('click', () => {
                    if (tailleChoisie === taille.dataset.taille) {
                      // Si déjà sélectionné, on désélectionne
                      tailleChoisie = null;
                      taille.classList.remove('bg-neutral-800', 'text-white');
                      taille.classList.add('bg-neutral-100', 'text-black');
                    } else {
                      // Sélectionne la nouvelle taille
                      tailleChoisie = taille.dataset.taille;
                      document.querySelectorAll('.taille_du_produit').forEach(t => t.classList.remove('bg-neutral-800', 'text-white'));
                      document.querySelectorAll('.taille_du_produit').forEach(t => t.classList.add('bg-neutral-100', 'text-black'));
                      taille.classList.add('bg-neutral-800', 'text-white');
                      taille.classList.remove('bg-neutral-100', 'text-black');
                    }
              });

            });

                // Gestion de la sélection de la couleur
                let couleurChoisie = "";  

                document.querySelectorAll(".couleur_du_produit").forEach(color => {  
                  color.addEventListener('click', () => {
                    if(couleurChoisie === color.dataset.couleur) {
                      couleurChoisie = null;
                      color.classList.remove('border', 'border-1', 'border-neutral-400');
                    } else{
                      couleurChoisie = color.dataset.couleur;         
                      document.querySelectorAll('.couleur_du_produit').forEach(c => c.classList.remove('border', 'border-1', 'border-neutral-400'));
                      color.classList.add('border', 'border-1', 'border-neutral-400');             
                    }                  

                  })
                })
                

                // Gestion de l'ajout au panier
                const bouton_ajouter_panier = document.querySelector('.bouton_ajouter_panier');

                bouton_ajouter_panier.addEventListener('click', () => {

                     
                 

                  if(!email) {
                    showToast_error("Veuillez vous connecter pour ajouter un produit au panier.");
                    return;
                  }

                  if(email && couleurChoisie && tailleChoisie) {

                 
                    let panier = JSON.parse(localStorage.getItem(`panier_${email}`)) || [];
                    const index = panier.findIndex(item =>
                      item.id === produit.id &&
                      item.taille === tailleChoisie &&
                      item.couleur === couleurChoisie
                    );

                    console.log(index)

                    if(index !== -1){
                       panier[index].quantiter += 1 ; 
                    } else {
                        const produit_a_ajouter = {
                            id: produit.id,
                            titre : produit.titre,
                            prix : produit.prix,
                            detail : produit.details,
                            taille : tailleChoisie,
                            couleur: couleurChoisie,
                            image : produit.image,
                            quantiter: 1,
                        };
                        panier.push(produit_a_ajouter)
                    }


                    localStorage.setItem(`panier_${email}` , JSON.stringify(panier));
                    showToast('Produit ajouter au pnaier ! ');
                    updateCompteurPanier();
                    afficherItemPanier();
                    prixTotal();
                    const bloc_btn_panier = document.querySelector('.bloc_btn_panier');
                    bouton_ajouter_panier.setAttribute("disable","true");
                    bloc_btn_panier.classList.add("bg-neutral-400", "text-neutral-500");
                    bouton_ajouter_panier.textContent= "Déja au panier";



                  } else {
                    showToast_error("Veuillez sélectionner une taille et une couleur");
                  }

                })






            }

            produitAuPanier(produit);





    };

};

if (produitId) {
    afficherDetailProduit(produitId);
}
































// popup.js------------


 document.addEventListener('DOMContentLoaded', function() {
  // Tableau des images du produit
  const productImages = [
    "/Assets/Resources/images/woman/new_arrival_all_1.png",
    "/Assets/Resources/images/woman/new_arrival_all_2.png",
    "/Assets/Resources/images/woman/new_arrival_all_3.png",
    "/Assets/Resources/images/woman/new_arrival_all_4.png"
  ];
  let currentIndex = 0;

  const openBtn = document.getElementById('openImageModal');
  const closeBtn = document.getElementById('closeImageModal');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const prevBtn = document.getElementById('prevImage');
  const nextBtn = document.getElementById('nextImage');

  // Ouvre la modale sur l'image courante
  if (openBtn && modal) {
    openBtn.addEventListener('click', function() {
      modal.classList.remove('hidden');
      modalImg.src = productImages[currentIndex];
    });
  }

  // Ferme la modale
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', function() {
      modal.classList.add('hidden');
      modalImg.style.transform = "scale(1)";
      zoomed = false;
    });
  }

  // Navigation précédente
  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + productImages.length) % productImages.length;
      modalImg.src = productImages[currentIndex];
      modalImg.style.transform = "scale(1)";
      zoomed = false;
    });
  }

  // Navigation suivante
  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % productImages.length;
      modalImg.src = productImages[currentIndex];
      modalImg.style.transform = "scale(1)";
      zoomed = false;
    });
  }

  // Zoom sur l'image au clic
  let zoomed = false;
  if (modalImg) {
    modalImg.addEventListener('click', function() {
      zoomed = !zoomed;
      modalImg.style.transform = zoomed ? "scale(2)" : "scale(1)";
      modalImg.style.cursor = zoomed ? "zoom-out" : "zoom-in";
    });
  }

  // Fermer la modale en cliquant sur le fond noir
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modalImg.style.transform = "scale(1)";
        zoomed = false;
      }
    });
  }
});