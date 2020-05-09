let montantFacture = prompt("Quel est le montant de votre facture ?");

let remise = parseInt(montantFacture) - (parseInt(montantFacture)*10)/100;//calcul de la remise

if (parseInt(montantFacture)> 40000) {
    alert("Vôtre facture est de : "+remise);//Montant avec remise
    
} else if (parseInt(montantFacture)>0 && parseInt(montantFacture)<= 40000) {
    alert("Vôtre facture est de : "+parseInt(montantFacture));//Montant sans remise

} else {
    alert("Rentrez une valeur positive");//autres
}