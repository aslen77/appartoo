var a=prompt("donner le premier nombre","a");
var b=prompt("donner le deuxieme nombre","b");
var choix=prompt("choisir votre mode entre Produit ou Somme","");
function somme(){
    return parseInt(a)+parseInt(b);
}
function Produit(){
    return parseInt(a)*parseInt(b);
}

function verificationChoix(){
    switch(choix){
        case 'somme':
        {
        alert("l'addition et le resultat est");
        alert(somme());}
        break;
        case 'produit':
        {
            alert("la multiplication et le resultat est");
            alert(Produit());}
        break;
        default:
        alert("faute de frape");
        
    }

}

function Afficher(verificationChoix){
    alert("le choix que vous avez choisit est");
}

verificationChoix(Afficher());