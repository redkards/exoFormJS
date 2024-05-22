let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let chrono = document.getElementById("chrono");
let temps = 0;
chrono.innerText = temps;

let minutes = parseInt(temps / 60, 10);
let secondes = parseInt(temps % 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes;
secondes = secondes < 10 ? "0" + secondes : secondes;
chrono.innerText = `${minutes}:${secondes}`;
// temps = temps <= 0 ? 0 : temps + 1;

function diminuerTemps() {
  chrono.innerText = temps;
  temps--;
}
function augmenterTemps() {
  chrono.innerText = temps;
  temps++;
}
chrono.innerText = `${minutes}:${secondes}`;
temps = temps <= 0 ? 0 : temps + 1;

btn1.addEventListener("click", () => {
  setInterval(augmenterTemps, 10);
});

// setInterval(() => {
//   let minutes = parseInt(temps / 60, 10);
//   let secondes = parseInt(temps % 60, 10);

//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   secondes = secondes < 10 ? "0" + secondes : secondes;

//   chrono.innerText = `${minutes}:${secondes}`;
//   temps = temps <= 0 ? 0 : temps + 1;
// }, 1000);

// setInterval();
