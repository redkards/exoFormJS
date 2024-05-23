//declaration variables

let nom = document.getElementById("nom").value;
let prenom = document.getElementById("prenom").value;
let mail = document.getElementById("email").value;
let mdp = document.getElementById("mdp").value;
let confirme = document.getElementById("confirmMdp").value;
let danger = document.querySelector(".danger");
let envoyer = document.getElementById("envoyer");
let nomError = document.getElementById("nomError");
let prenomError = document.getElementById("prenomError");
let mailError = document.getElementById("mailError");
let confirmError = document.getElementById("confirmMdpError");

let verif = /[a-z]{2}/;

let verifmail = /^([a-z0-9.+-_])+@([a-z0-9.+-_])+\.([A-Za-z]{2,4})/;

let verifmdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{10,}$/;

//declaration fonctions

function formSubmit(event) {
  let isValid = true;
  nom = document.getElementById("nom").value;

  prenom = document.getElementById("prenom").value;
  mail = document.getElementById("email").value;
  mdp = document.getElementById("mdp").value;
  confirme = document.getElementById("confirmMdp").value;
  envoyer = document.getElementById("envoyer");
  console.log(nom, prenom, mail, mdp);

  if (verif.test(nom) && nom != "") {
    console.log("good");
    nomError.style.display = "none";
    event.preventDefault();
  } else {
    nomError.style.display = "block";
    console.log("bad");
    isValid = false;
    event.preventDefault();
  }

  if (verif.test(prenom) && prenom != "") {
    console.log("ok");
    prenomError.style.display = "none";
    event.preventDefault();
  } else {
    prenomError.style.display = "block";
    console.log("pasOk");
    isValid = false;
    event.preventDefault();
  }

  if (verifmail.test(mail) && mail != "") {
    console.log("yes");
    mailError.style.display = "none";
    event.preventDefault();
  } else {
    mailError.style.display = "block";
    console.log("no");
    isValid = false;
    event.preventDefault();
  }
  if (verifmdp.test(mdp) && mdp != "") {
    console.log("oui");
    mdpError.style.display = "none";
    event.preventDefault();
  } else {
    mdpError.style.display = "block";
    console.log("non");
    isValid = false;
    event.preventDefault();
  }
  if (verifmdp.test(mdp)) {
    console.log("true");
    confirmError.style.display = "none";
    event.preventDefault();
  } else {
    confirmError.style.display = "block";
    console.log("false");
    isValid = false;
    event.preventDefault();
  }

  if (isValid) {
    localStorage.setItem("lastName", nom);
    localStorage.setItem("firstName", prenom);
    localStorage.setItem("adresseMail", mail);
    localStorage.setItem("password", mdp);
    localStorage.setItem("confirmPassword", confirme);
    alert("compte créé");
  }
}

console.log(localStorage);

console.log(nom);
console.log(prenom);
