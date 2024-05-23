let mail = document.getElementById("email").value;
// let mdp = document.getElementById("mdp").value;
// let stockMail = localStorage.getItem(mail);
// let stockMdp = localStorage.getItem(mdp);

console.log(localStorage);

localStorage.getItem("email", mail);

let localMail = registerStorage.getItem(mail);

console.log(localMail);
