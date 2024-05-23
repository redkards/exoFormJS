let adressMail = document.getElementById("adresseEmail").value;
let pass = document.getElementById("pass").value;
// let stockMail = localStorage.getItem(mail);
// let stockMdp = localStorage.getItem(mdp);

let verifmail = /^([a-z0-9.+-_])+@([a-z0-9.+-_])+\.([A-Za-z]{2,4})/;

let verifmdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{10,}$/;

console.log(localStorage);
console.log("adressMail");

console.log("pass");

function VerifData(action) {
  adressMail = document.getElementById("adresseEmail").value;
  pass = document.getElementById("pass").value;

  if (verifmail.test(adressMail)) {
    console.log(yesssss);
    action.preventDefault();
  } else {
    console.log(noooooo);
    action.preventDefault();
  }

  if (verifmail.test(pass)) {
    console.log(okkkkkkkkkkkk);
    action.preventDefault();
  } else {
    console.log(passsssokkkkkkkk);
    action.preventDefault();
  }
}

console.log(adressMail);

console.log(pass);
