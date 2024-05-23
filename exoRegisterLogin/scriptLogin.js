let adressMail = document.getElementById("adresseEmail").value;
let passw = document.getElementById("pass").value;
let verifAdress = localStorage.getItem("adresseMail");
let verifPassword = localStorage.getItem("password");

let verifmail = /^([a-z0-9.+-_])+@([a-z0-9.+-_])+\.([A-Za-z]{2,4})/;

let verifmdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{10,}$/;

console.log(localStorage);

function VerifData(action) {
  adressMail = document.getElementById("adresseEmail").value;
  passw = document.getElementById("pass").value;

  console.log(adressMail, passw);

  if (adressMail === verifAdress) {
    console.log(yesssss);
    action.preventDefault();
  } else {
    console.log(noooooo);
    action.preventDefault();
  }

  if (passw === verifPassword) {
    console.log(okkkkkkkkkkkk);
    action.preventDefault();
  } else {
    console.log(passsssokkkkkkkk);
    action.preventDefault();
  }
}

console.log(adressMail);

console.log(passw);
