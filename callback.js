var a=prompt("donner le le nombre prmier","a");
var b=prompt("donner le deuxieme nombre","b");
var choix=prompt("choisir votre mode entre Produit ou Somme","");
//fonction de somme 
function somme(a,b){
     
   x=a+b;
   alert(x);
}
// fonction du Produit 
function Produit(a,b){
    return parseInt(a)*parseInt(b);
}
// fonction de calculatrice 
function calculatrice(callback){
    
if(choix ='somme')
{
    alert("le choix que vous avez fait est la somme ");
        callback(somme);
}   else if(choix='produit')
{
    alert("le choix que vous avez fait est la multiplication ");
    callback(Produit);
}  
else 
{
    alert('erreur');
}
}

  
calculatrice(choix);

function salutation(name) {
    alert('Bonjour ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Entrez votre nom.');
    callback(name);
  }
  
  processUserInput(salutation);