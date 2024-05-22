//variable mon tableau de notes

let mesNotes = [9, 15, 2, 85, 36, 90];
let mesFruits = ["pomme", "banane", "poire", "orange"];

//prendre la premier elément du tableau et l'affiche dans la console
// console.log("la première note du tableau:" + mesNotes[0]);

// console.log("le premier fruit du tableau:" + mesFruits[0]);
// console.log(mesNotes.length);

for (let i = 0; i < mesNotes.length; i++) {
  console.log(mesNotes[i]);
}

mesFruits.splice(2, 0, "kiwi");

console.log(mesFruits.toString());
