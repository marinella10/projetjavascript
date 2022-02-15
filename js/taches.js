//Variable Globale

//Ajouter un tache depuis input
function nouvelleTache(){

    //On creer un liste element <li>
    let li = document.createElement("li");
    li.classList.add("tache");
    //Recup de la valeur de input
    let inputValue = document.getElementById("input-ajouter-tache").value;
    console.log(inputValue);
    //Creation et ajout d'un noeurd li
    let liNode = document.createTextNode(inputValue);
    //Ajout au parent
    li.appendChild(liNode);
    //Si le champs input est vide
    if(inputValue === ""){
        //On declenche une alerte
        alert("Merci de remplir le champ tache !");
    }else{
        //Sinon ajoute au <ul>
        document.getElementById("taches-liste").appendChild(li);
    }
    //On vide le champ input
    document.getElementById("input-ajouter-tache").value = "";

    //On creer une span avec son boutton supprimer
    let span = document.createElement('span');
    //Creation de la croix X
    let croix = document.createTextNode("X");
    //Ajout d'un attribut class
    span.className = 'supprimer';
    //Ajout de la croix au parent <span>
    span.appendChild(croix);
    li.appendChild(span);

    //Recuperation des classes <span class="supprimer">
    let btnSupprimer = document.getElementsByClassName("supprimer");

    //Boucle de parcours de toutes les span avec la classe supprimer
    for (let i = 0; i < btnSupprimer.length; i++) {
        //Su chaque span on declence un click
        btnSupprimer[i].onclick = function() {
            //alert("clic")
            //On recup le parent de span = <li>
            let spanParentLI = this.parentElement;
            //let spanParentLI = btnSupprimer[i].parentElement;
            //On cache <li> avec css
            spanParentLI.style.display = "none";
        }
    }

    /*
    //SECONDE METHODE
    //Recup de toutes les <li class="tache">
    let liElement = document.getElementsByClassName("tache");
    //boucle de parcours de tous les <li> classe tache
    for(let b = 0; b < liElement.length; b++){
        //debug
        console.log(liElement[b])
        //au clic sur un des <li classe tache
        liElement[b].addEventListener("click", function (event) {
            //On ajoute et retire la classe checked
            event.target.classList.toggle('checked');
        })

    }

     */

}



function barrerTache(){
    //Ajouter le symbol check quand on clic sur un li
    //recup du parent <ul>
    let listUL = document.getElementById("taches-liste")
    //Au clic <ul>
    listUL.addEventListener('click', function(event) {
        //Si <ul> possède un balise <li>
        if (event.target.tagName === 'LI') {
            //On ajoute et retire la classe checked
            event.target.classList.toggle('checked');
        }
    });
}






barrerTache();

