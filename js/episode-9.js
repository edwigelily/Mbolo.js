let moyenne = prompt("Entrer votre moyenne"); //saisir moyenne 

if (parseInt(moyenne)>=10 && parseInt(moyenne)<12 ) {
    alert("Passable");//1ère condition

} else if (parseInt(moyenne)>=12 && parseInt(moyenne)<14) {
    alert("Assez-bien");//2ème condition

} else if (parseInt(moyenne)>=14 && parseInt(moyenne)<16) {
    alert("Bien");//3ème condition

} else  if (parseInt(moyenne)>=16 && parseInt(moyenne)<18) {
    alert("Très-bien");//4ème condition

}
else  if (parseInt(moyenne)>=18 && parseInt(moyenne)<=20) {
    alert("Excellent");//5ème condition
}
else  if (parseInt(moyenne)>=0 && parseInt(moyenne)< 10) {
    alert("Peut mieux faire");//6ème condition
}
else{
    alert("Saisir un nombre entre 0 et 20");//7ème condition
}