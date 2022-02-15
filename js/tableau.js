//TABLEAU

//Creer un tabeleau numeroté index = valeur
//L'INDEX DES TABLEAU COMMEN PAR 0
//exemple console.log(tableau[0]) = affiche l'index du tableau 0 soit michael
/*
let tableau1 = ["michael", 15, 15.25, true];

//On creer une variable qui stock la liste <ul>
let afficherTableau = document.getElementById("test");

//on creer une varaible monAlias = tableau

for(monAlias of tableau1){
    //on genere un <li>
    let listeElement = document.createElement("li");
    //chaque <li> prend la valeur de l'index du tableau
    listeElement.innerHTML = monAlias;
    //On ajoute chaque <li> a <ul>
    afficherTableau.appendChild(listeElement);
}

 */




/*
CREER UN OBJET =  tableau assiociatif cle: valeur
let Chien = {
    id:1,
    nom: "bob",
    couleur: "rouge"
}

//Affiche l'objet entier
console.log(Chien)
//affiche une propriété de l'objet = ici la couleur du chien
console.log(Chien.couleur)

 */


//On creer un tableau d'objet [{monObjet}]
let tableauProduits = [
    {
        id:1,
        nomProduit: "velo",
        prixProduit: 125.25,
        disponible: true
    },
    {
        id:2,
        nomProduit: "chaise",
        prixProduit: 1225.25,
        disponible: false
    },
    {
        id:3,
        nomProduit: "table",
        prixProduit: 1225.25,
        disponible: false
    },
    {
        id:4,
        nomProduit: "tabouret",
        prixProduit: 1225.25,
        disponible: false
    },
];

//on stock <ul id="tableau"> dans une vairiable
let ul = document.getElementById("tableau");
//on stock un Tableau vide du panier dans une variable
let tableauPanier = [];
//Debug du tableau vide
console.log("LE TABLEAU PANIER EST BIEN VIDE " + tableauPanier)


//On creer une fonction appelée en bas de page
function afficherProduit(){
    //On boucle sur le tableau de produit a l'aide de la methode .map(fonction(paramètre))
    tableauProduits.map(function (produit){
        //Debug des objets du tableauProduits(] a l'aide de l'alias (paramtre de la fonction anonyme) produit
        console.log(produit)
        //On genere un <li>
        let li = document.createElement("li");
        //On ajoute une classe dynamique <li id="produit-1">
        li.id = `produit-${produit.id}`

        //Ajout de contenus HTML dans chaque <li> 2 paragarphes avec le nom et le prix du produit
        li.innerHTML =
            `
            <p style="color:#BA4C63;">NOM DU PRODUIT : ${produit.nomProduit}</p>
            <p style="color:#3498db;">PRIX PRODUIT : ${produit.prixProduit}</p>
            `
        //Ajout de <ul> a <li> en tant qu'enfant
        ul.appendChild(li);

        //Au clic sur chaque <li>

        li.addEventListener("click", function (){
            //on cache l'objet du tableauProduit a l'aide de CSS
            li.style.display = "none";
            //On ajoute au tableau vide panier l'objet concerner
            tableauPanier.push(produit)
            //Debug
            console.log("LE PANIER " + tableauPanier)
            //Appel de la fonction qui affiche le objet du tableau panier
            afficherPanier();
        })
    });
}

//Afficher les objets du tabealu panier
function  afficherPanier(){
    //On creer une variable vide de type string
    let produitAjouterPanier = "";

    //On boucle sur le tableau panier remplis au clic dans etape 1
    tableauPanier.forEach(panier => {
        //On ajoute des element HTML a chaque <li>
        produitAjouterPanier +=
            `
            <li id="produitSupprimer${panier.id}">
            <p style="color: #1ABC9C">NOM DU PRODUIT : ${panier.nomProduit}</p>
            <p style="color: #BA4C63">PRIX PRODUIT : ${panier.prixProduit}</p>
            </li>
            `
    });
    //Recup de <ul id="panier"> et on injecte chaque <li>

    document.getElementById("panier").innerHTML = produitAjouterPanier

    //Supprimer un produit

    //1 - Boucler sur le tableau panier  //function(supprimerProduit)
    tableauPanier.forEach(function (supprimerProduit){
        //On recup l'id des <li> du tableauProduit
        let produitTableau1 = document.getElementById(`produit-${supprimerProduit.id}`)
        //On recup l'id des <li> du tableauPanier
        let produitSupprimer = document.getElementById(`produitSupprimer${supprimerProduit.id}`)
        //Au clic sur chaque <li> du tableau panier
        produitSupprimer.addEventListener("click", () => {
            //alert("test")
            //On reaffiche les <li> du tableau Produit avec CSS
            produitTableau1.style.display = "block";
            //On recup l'index du produit cliqué du tableau panier et on le stock dans une variable
            let indexPanier = tableauPanier.indexOf(supprimerProduit)
            //Debug
            console.log("INDEX du tableau panier = " + indexPanier);
            //On supprime l'element du tableau cliquer avec splice(index du tableau, nombre d'element a supprimer)
            tableauPanier.splice(indexPanier,1)
            //Debug du tableau supprimer
            console.log(tableauPanier)
            //On supprimer le noeud <li> du tableau panier
            produitSupprimer.remove();
        });
    });
}

//Appel de la fonction afficher le tableauProduit

afficherProduit();

