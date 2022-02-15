//Tableau d'objet des produits
let tableauProduits = [
    {
        id:1,
        nomProduits: "Enceintes KrK",
        imageProduit: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/bdb/322608/14633221_800.jpg",
        descriptionProduits: "Des enceintes de pro pour du son superbe",
        prixProduit: 125.25,
        produitQuantite: 1,
        produitTTC: 0,
        categorie: "Musique"
    },
    {
        id:2,
        nomProduits: "Iphone Apple",
        imageProduit: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000",
        descriptionProduits: "Telephone Apple dernier cris, reconditionner",
        prixProduit: 789.25,
        produitQuantite: 1,
        produitTTC: 0,
        categorie: "Telelphonie"
    },
    {
        id:3,
        nomProduits: "SNES MINI",
        imageProduit: "data:image/jpeg;base64,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",
        descriptionProduits: "Version minifier de la Super Nintendo",
        prixProduit: 325.25,
        produitQuantite:1,
        produitTTC: 0,
        categorie: "Jeux video"
    },
    {
        id:4,
        nomProduits: "Chaise Bois",
        imageProduit: "https://cdn.connox.fr/m/100030/140048/media/stoelcker/Frankfurter-Kuechenstuhl/Frankfurter-Kuechenstuhl-Buche-frei-1200x1200.jpg",
        descriptionProduits: "Chaise en bois grise IKEA",
        prixProduit: 205.50,
        produitQuantite:1,
        produitTTC: 0,
        categorie: "Meuble"
    },
    {
        id:5,
        nomProduits: "Mac Apple",
        imageProduit: "https://cdn.pocket-lint.com/r/s/1200x/assets/images/152659-laptops-feature-apple-silicon-what-does-it-mean-for-your-existing-mac-and-your-next-one-image3-ompkj48tmh.jpg",
        descriptionProduits: "Pc Apple avec les derniers processeurs",
        prixProduit: 45.25,
        produitQuantite: 1,
        produitTTC: 0,
        categorie: "Informatique"
    },
    {
        id:6,
        nomProduits: "Korg Minilogue",
        imageProduit: "https://thumbs.static-thomann.de/thumb/thumb600x600/pics/bdb/457066/14351333_800.jpg",
        descriptionProduits: "Synthetiseur analogique Korg",
        prixProduit: 1789.25,
        produitQuantite: 1,
        produitTTC: 0,
        categorie: "Musique"
    },


];
//recup de la iste HTML <ul>
let carteProduits = document.getElementById("produits");
//Creation d'un tableau vide panier=[""]
let panier = [];

//Rechercher un produits
//Rechercher


function  resultatRecherche() {
    let listeParent = document.getElementById("produitsRechercher");
    let barreRecherche = document.getElementById("rechercher")
    let resultLI = document.createElement("li");
    resultLI.className = "produit-card-result";

    barreRecherche.addEventListener("input", (event) =>{
        let inputValue = event.target.value.toLowerCase();
        console.log(inputValue);

        if(inputValue.length != ""){
            let res = tableauProduits.filter(produit =>
                produit.nomProduits.toLowerCase().includes(inputValue))
            console.log(res)
            res.map(datas => {
                resultLI.innerHTML = `
                    <hr>
                    <h2 class="resulat-recherche">RESULTAT DE RECHERCHE</h2>
                    <hr>
                    <h3 class="titre-produit">${datas.nomProduits}</h3>
                    <img class="image-produit" src="${datas.imageProduit}" alt="${datas.nomProduits}" title="${datas.nomProduits}">
                    <p>Description : </p>
                    <p>${datas.descriptionProduits}</p>
                    <p>Prix HT : ${datas.prixProduit} Euros</p> 
                  
                `
                listeParent.appendChild(resultLI)
            });
        }else{
            resultLI.innerHTML = "AUCUN RESULTATS"
        }
    });
}


//Fonction afficher les produits du tableau d'objet produits
function afficherProduit(){
    //La méthode forEach() est une boucle qui permet d'exécuter une fonction donnée sur chaque élément d'un tableau.

    tableauProduits.forEach((produit) => {
        //generation d'un noeud element <li>
        let produitElement = document.createElement("li");
        //Ajout d'une classe
        produitElement.className = "produit-card";
        //Ajout d'un id dynamique
        produitElement.id = `produit${produit.id}`;
        //Ajout de contenu HTML avec la concatenation ES6
        //Acces aux données d'objet avec alias (produits).element de l'objet
        //ex : produit.nomProduit
        produitElement.innerHTML =
            `
        <h3 class="titre-produit">${produit.nomProduits}</h3>
        <img class="image-produit" src="${produit.imageProduit}" alt="${produit.nomProduits}" title="${produit.nomProduits}">
        <p>Description : </p>
        <p>${produit.descriptionProduits}</p>
        <p>Prix HT : ${produit.prixProduit} Euros</p> 
        `
        //Ajout des <li> a  <ul>
        carteProduits.appendChild(produitElement)
        //Au clic sur chaque <li> on ajoute l'objet cliquer au tableau vide panier
        produitElement.addEventListener("click", () => {
            panier.push(produit);
            //On cache l'element cliqué du tableau paroduits
            produitElement.style.display = "none"
            //On appel la fonction affciher le panier
            afficherPanier()
        });
    });
}


function afficherPanier() {

    //On creer une variable vide
    let produitPanier = "";
    //On redup le tableau ingredients choisis rempli par les click sur les ingredients
    panier.forEach(produit => {
        //On ajoute les elements de la boucle a notre variable
        produitPanier +=
            `
            <li class="produit-card-panier" id="produitAjouter${produit.id}">
                <div id="btn-supprimer${produit.id}" class="supprimer-produit">&times;</div>
                <img class="image-produit" src="${produit.imageProduit}" alt="${produit.nomProduits}" title="${produit.nomProduits}">     
                <h3 class="titre-produit">${produit.nomProduits}</h3>
                                                
                <select class="select-quantite" id="selectQuantite${produit.id}">
                    <option selected>Quantite(s)</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>                  
                </select>   
                <p class="prix-para">Prix HT :<br /> ${produit.prixProduit} Euros</p>    
            </li>
            `
    });

    document.getElementById("panier").innerHTML = produitPanier;

    //supprimer un produit du panier
    panier.forEach(produitSupprimer => {

        let produit = document.getElementById(`produit${produitSupprimer.id}`);
        let produitAjouter = document.getElementById(`produitAjouter${produitSupprimer.id}`);
        let btnSupprimer = document.getElementById(`btn-supprimer${produitSupprimer.id}`);

        btnSupprimer.addEventListener("click", () => {
            produit.style.display = "block";
            //produitAjouter.style.display = "none"
            let produitIndex = panier.indexOf(produitSupprimer);
            //On retire l'ingredient du tableau grace a son index
            panier.splice(produitIndex,1);
            //On supprime l'ingredient de l'affichage
            produitAjouter.remove();
            document.getElementById(`totalHT${produitSupprimer.id}`).innerHTML = "";
            document.getElementById(`totalTTC${produitSupprimer.id}`).innerHTML = "";
            document.getElementById("totalTTC").innerHTML = ""

        });

        //Les conteneurs
        let prixHTConteneur = document.getElementById("totalHTConteneur");
        let prixTTConteneur = document.getElementById("totalTTConteneur")

        //Recup quantiter depuis le select
        let selectQuantite = document.getElementById( `selectQuantite${produitSupprimer.id}`);

        let prixHT = document.createElement("div");
        prixHT.id = `totalHT${produitSupprimer.id}`

        prixHTConteneur.appendChild(prixHT)

        let prixTTC = document.createElement("div");
        prixTTC.id = `totalTTC${produitSupprimer.id}`
        prixTTConteneur.appendChild(prixTTC)

        selectQuantite.addEventListener("change", () =>{
            let index = selectQuantite.selectedIndex;
            console.log(index)
            //Afficher prix HT
            let prixHT = document.getElementById(`totalHT${produitSupprimer.id}`);
            let prixDynamiqueHt = index * produitSupprimer.prixProduit;

            //TTC
            let prixTTCConteneur = document.getElementById(`totalTTC${produitSupprimer.id}`);
            let prixTva = Math.round(prixDynamiqueHt * 0.2);

            let prixTTC = prixDynamiqueHt + prixTva;

            produitSupprimer.produitTTC = prixTTC
            let tableauTTC = [];

            tableauProduits.forEach(alias => {
                let sum = 0
                tableauTTC.push(alias.produitTTC)
                console.log(tableauTTC)
                for (let i = 0; i < tableauTTC.length; i++){
                    sum += tableauTTC[i];
                    console.log(sum)
                    let afficherTTC = document.getElementById("totalTTC");
                    afficherTTC.innerHTML = "<p class='nom'>TOTAL TTC : </p>" + "<b class='nom'>" + sum + "</b>" + "EUROS"
                }
            })

            prixHT.innerHTML = `<br /><span class="nom">${produitSupprimer.nomProduits} X Quantite(s) : ${index} = ${prixDynamiqueHt} Euros</span><br />`;
            prixTTCConteneur.innerHTML = `<br /><span class="quantite">Prix HT: ${prixDynamiqueHt} Euros + TAUX 20% : ${prixTva}  Euros = ${produitSupprimer.produitTTC} Euros</span><br />`;


            afficherPanier();
        })


    })
}


resultatRecherche();
afficherProduit();




