//declaration variables

let nom = document.getElementById("nom").value;
let prenom = document.getElementById("prenom").value;
let mail = document.getElementById("email").value;
let tel = document.getElementById("tel").value;
let danger = document.querySelector(".danger");
let envoyer = document.getElementById("envoyer");
let nomError = document.getElementById("nomError");
let prenomError = document.getElementById("prenomError");
let mailError = document.getElementById("mailError");
let telError = document.getElementById("telError");
telControl = new RegExp(
  "^\\+[0-9]{10}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$"
);

//fonction qui vérifie si le formulaire est valide

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

function telNumber(phoneNumber) {
  // Define the regular expression pattern using RegExp object
  const pattern = new RegExp(
    "^\\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$"
  );

  // Test the phone number against the pattern
  if (pattern.test(phoneNumber)) {
    console.log("Phone number is valid");
    return true;
  } else {
    console.log("Phone number is not valid");
    return false;
  }
}

telNumber();
