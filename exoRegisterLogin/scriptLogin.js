let adressMail = document.getElementById("adresseEmail").value;
let passw = document.getElementById("pass").value;
let verifAdress = localStorage.getItem("adresseMail");
let verifPassword = localStorage.getItem("password");
let mailError = document.getElementById("adresseEmailError");
let passError = document.getElementById("passError");

let verifmail = /^([a-z0-9.+-_])+@([a-z0-9.+-_])+\.([A-Za-z]{2,4})/;

let verifmdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{10,}$/;

console.log(localStorage);

function VerifData(event) {
  let Validation = true;

  adressMail = document.getElementById("adresseEmail").value;
  passw = document.getElementById("pass").value;

  console.log(adressMail, passw);

  if (adressMail === verifAdress) {
    mailError.style.display = "none";
    console.log("yesssss");
    event.preventDefault();
  } else {
    mailError.style.display = "block";
    console.log("noooooo");
    Validation = false;
    event.preventDefault();
  }

  if (passw === verifPassword) {
    passError.style.display = "none";
    console.log("okkkkkkkkkkkk");
    event.preventDefault();
  } else {
    passError.style.display = "block";
    console.log("passsssokkkkkkkk");
    Validation = false;
    event.preventDefault();
  }

  if (Validation) {
    let date = new Date();
    date = date.toLocaleDateString();
    let time = new Date();
    time = time.toLocaleTimeString();

    let temps = {
      date: date,
      heure: time,
    };
    temps = localStorage.setItem("logTime", JSON.stringify(temps));
    alert("vous êtes connecté");
    window.location.href = "./affichage.html";
  }
}
