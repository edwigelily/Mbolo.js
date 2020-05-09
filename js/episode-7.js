let ageUser = prompt("Quelle Âge avez-vous ? "); //entrer age


if ( parseInt(ageUser)>= 0 && parseInt(ageUser) < 18) {//1ère condition
    alert("Vous êtes mineur !! ");

} else if (parseInt(ageUser) >= 18) { //2ème condition
    alert("Vous êtes majeur");
    
}else{
    alert("l'âge ne peut être négatif");//3ème condition
}


