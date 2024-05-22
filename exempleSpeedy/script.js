let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");

function courrir() {
  document.getElementById("speedyDepart").style.display = "none";
  document.getElementById("speedyCourt").style.display = "block";
}

function restart() {
  document.getElementById("speedyDepart").style.display = "block";
  document.getElementById("speedyCourt").style.display = "none";
}

btn1.addEventListener("click", courrir);
btn2.addEventListener("click", restart);
