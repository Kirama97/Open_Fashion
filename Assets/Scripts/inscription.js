import { showToast_error , showToast } from "./back_office.js";

// ----------------inscription------------------

// alert("Inscription page loaded");

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.inscription_form');

  if (form){

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const prenom = form.prenom.value.trim();
        const nom = form.nom.value.trim();
        const email = form.email.value.trim();
        const password1 = form.password1.value.trim();
        const password2 = form.password2.value.trim();
        const errorMessages = [];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        // Validation des champs

         let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];

        // verifiaction de mes champs
       
        if (!password1) {
            errorMessages.push("Le mot de passe est obligatoire.");
        } else if (!passwordRegex.test(password1)) {
            errorMessages.push("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.");
        }
        if (!password2) {
            errorMessages.push("La confirmation du mot de passe est obligatoire.");
        } else if (password1 !== password2) {
            errorMessages.push("Les mots de passe ne correspondent pas.");
        }
        if(utilisateurs.some(user => user.email === email)) {
            errorMessages.push("Cet email est déjà utilisé.");
        }
         if (!email) {
            errorMessages.push("L'email est obligatoire.");
        } else if (!emailRegex.test(email)) {
            errorMessages.push("L'email n'est pas valide.");
        }

         if (!email || !password1 || !password2 || !prenom || !nom) {
        errorMessages.push("Veuillez remplir tous les champs.");    
      }
        // Affichage des messages d'erreur
        if (errorMessages.length > 0) {
            errorMessages.forEach(message => showToast_error(message));
        }
        else {
        //   on peut envoyer les données dans le localStorage maintenant 

          utilisateurs.push({email , password1 , prenom , nom});

          localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));
          localStorage.setItem('utilisateurConnecter' , email);

            showToast("Inscription réussie !");
            setTimeout(() => {
              window.location.href = "/pages/connexion.html";
            }, 2000);
          

        }   


        // 




    })


  }




})