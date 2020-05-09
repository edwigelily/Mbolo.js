let calcul = prompt("combien font 3*5 ?");//entrer valeur de la reponse
let reponse = 3*5;
do{
    calcul = prompt("Faux! essayez encore");
}
while(parseInt(calcul)!=reponse);

alert("Vrai 3*5 = 15 ");