// let nom = localStorage.getItem("lastName");

// let mail = localStorage.getItem("adresseMail");

// console.log(nom, mail);

// document.getElementById("nom").innerHTML = "votre nom est: " + nom;

// document.getElementById("mail").innerHTML = "votre mail est :" + mail;

let user = localStorage.getItem("dataUser");
console.log("donnée :" + user);

let objUser = JSON.parse(user);

console.log(objUser.nom);
console.log(objUser.mail);

document.getElementById("nom").innerHTML = "votre nom  :" + objUser.nom;
document.getElementById("mail").innerHTML = "votre mail :" + objUser.mail;

let timeConnexion = localStorage.getItem("logTime");
console.log(timeConnexion);
timeConnexion = JSON.parse(timeConnexion);
console.log(timeConnexion);

document.getElementById("timeCo").innerHTML =
  "votre derniere connexion :" +
  timeConnexion.date +
  " à " +
  timeConnexion.heure;
