//saisir nom et sexe
let name = prompt("Quel est votre nom ? ");

let sex = prompt("Quel est votre sexe ? F OU M ?");



if (sex == "F") { //condition 1
    alert("Bonjour "+"Madame "+name);

} else if (sex == "M") { //condition 2
    alert("Bonjour "+"Monsieur "+name);

} else { //condition 3
    alert("Saisir : F ou M");
}