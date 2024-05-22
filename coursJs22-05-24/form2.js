let nom = document.getElementById("nom").value;
let prenom = document.getElementById("prenom").value;
let mail = document.getElementById("email").value;
let tel = document.getElementById("tel").value;
let danger = document.querySelector(".danger");
let envoyer = document.getElementById("envoyer");
let nomError = document.getElementById("nomError");
let prenomError = document.getElementById("prenomError");
let mailError = document.getElementById("emailError");
let telError = document.getElementById("telError");
function formSubmit(event) {
  nom = document.getElementById("nom").value;

  prenom = document.getElementById("prenom").value;
  mail = document.getElementById("email").value;
  tel = document.getElementById("tel").value;
  envoyer = document.getElementById("envoyer");
  console.log(nom, prenom, mail, tel);

  if (nom == "") {
    nomError.style.display = "block";
    event.preventDefault();
  }

  if (prenom == "") {
    prenomError.style.display = "block";
    event.preventDefault();
  }

  if (mail == "") {
    mailError.style.display = "block";
    event.preventDefault();
  }

  if (tel == "") {
    telError.style.display = "block";
    event.preventDefault();
  }
}
