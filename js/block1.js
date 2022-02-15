
// Récuprer l'id du dom (html) du block 1 
let bloc1Parent = document.getElementById("block1");




// Creer une div dans l'htmtl et le récuperer
let blockEnfant = document.createElement("div");

blockEnfant.className = "toto"
 
//Récuperrer le texte dans l'html de la variable blockEnfant
 

blockEnfant.innerHTML = `
<div class="logo-bloc1">
    <img src="image/avataaars.svg" class="ava" alt="logo avataar" width="15%" title="avataar">
</div>


<div class="block1-gauche">
    <h2 class="titre-h2">START BOOTSTRAP</h2>
    <div class="line-star-parent">
        <div class="line-white"></div>
        <div class="star">
               <i class="fa fa-star fa-3x"></i>
               <i class="fa fa-star fa-3x"></i>
               <i class="fa fa-star fa-3x"></i>
        </div>
        <div class="line-white"></div>
    </div>
    <h3 class="titre-h3">Artiste Graphique - Web Designer - Illustrateur</h3>
`

//ajoute une div a l interieur de la div id= block1
bloc1Parent.appendChild(blockEnfant)


