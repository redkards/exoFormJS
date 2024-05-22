let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let postIt = document.querySelector(".postIt");
let survol = document.querySelector(".survol");
let texte = document.querySelector("#p1");
let texte2 = document.querySelector("#p2");

console.log(btn1);

btn1.addEventListener("click", () => {
  postIt.style.visibility = "hidden";
});

btn2.addEventListener("click", () => {
  postIt.style.visibility = "visible";
});

texte2.addEventListener("mouseover", () => {
  postIt.style.visibility = "visible";
  texte.textContent = "c'est gentil de me survoler..";
});
