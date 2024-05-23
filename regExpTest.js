// let modele = /javascript/i;

// let texte = "Expression régulière en JavaScript";
// let texte2 = texte.search(modele);

// if (modele.test(texte)) {
//   console.log(modele + "a été trouvé dans le texte");
// } else {
//   console.log(modele + "n'a pas été trouvé dans le texte");
// }

// let position = texte.search(modele);
// console.log(position);

// let nouveauTexte = texte.replace(modele, "javaScript");

// console.log(nouveauTexte);

// let liste = "javascript, react, perl";
// let tab = liste.split(/, ?/);
// for (element in tab) {
//   console.log(element);
// }

// for (value of tab) {
//   console.log(value);
// }
// let separateur = /, ?/;

// let modele = /JAVA/g;
// let texte = "JAVASCRIPT est un langage de programmation et JAVA";
// let texte2 = texte.replace(/JAVA/g, "java");

// console.log(texte2);

// let modele = /java(script)?/g;
// let texte = "Expression  java régulière en javascript";
// let texte2 = texte.replace(modele, "hello");
// console.log(texte2);

let essai = /\d/g;
let nom = "51848";

if (essai.test(nom)) {
  console.log("good");
} else {
  console.log("bad");
}
