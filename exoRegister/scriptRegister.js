//declaration variables

let nom = document.getElementById("nom").value;
let prenom = document.getElementById("prenom").value;
let mail = document.getElementById("email").value;
let mdp = document.getElementById("mdp").value;
let confirm = document.getElementById("confirmmdp").value;
let danger = document.querySelector(".danger");
let envoyer = document.getElementById("envoyer");
let nomError = document.getElementById("nomError");
let prenomError = document.getElementById("prenomError");
let mailError = document.getElementById("mailError");
let telError = document.getElementById("mdpError");

let verif = /\d/;

console.log(nom, prenom, mail, mdp);

//declaration fonctions

function formSubmit(event) {
  nom = document.getElementById("nom").value;

  prenom = document.getElementById("prenom").value;
  mail = document.getElementById("email").value;
  mdp = document.getElementById("mdp").value;
  envoyer = document.getElementById("envoyer");
  console.log(nom, prenom, mail, mdp);

  if (verif.test(nom) == true) {
    nomError.style.display = "block";

    event.preventDefault();
  } else {
    console.log("hello");
  }
}

//   if (prenom == "") {
//     prenomError.style.display = "block";
//     event.preventDefault();
//   }

//   if (mail == "") {
//     mailError.style.display = "block";
//     event.preventDefault();
//   }

//   if (mdp == "") {
//     mdpError.style.display = "block";
//     event.preventDefault();
//   }

// function mdpTest(mdp) {

//   const control = new RegExp("^\\+[0-9]{4}");

//     if (control.test(mdp)) {
//     console.log("ok");
//     return true;
//   } else {
//     console.log("bad");
//     return false;
//   }
// }
