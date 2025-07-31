import { showToast_error , showToast } from "./back_office.js";

// ----------------connexion------------------
document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.connexion_form');


 if (form){

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const errorMessages = [];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation des champs
        if (!email) {
            errorMessages.push("L'email est obligatoire.");
        } else if (!emailRegex.test(email)) {
            errorMessages.push("L'email n'est pas valide.");
        }
        if (!password) {
            errorMessages.push("Le mot de passe est obligatoire.");
        }

        // Affichage des messages d'erreur
        if (errorMessages.length > 0) {
            errorMessages.forEach(message => showToast_error(message));
        } else {
          // Vérification des identifiants dans le localStorage
          let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];
          const utilisateur = utilisateurs.find(user => user.email === email && user.password1 === password);

          if (utilisateur) {
            showToast("Connexion réussie ! Bienvenue " + utilisateur.prenom + " " + utilisateur.nom);
            setTimeout(() => {
              window.location.href = "/index.html"; 
            }, 2000);
          } else {
            showToast_error("Identifiants incorrects. Veuillez réessayer.");
          }
        }
    });
  }











 
});











































