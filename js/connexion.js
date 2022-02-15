const email = "unemail@gmail.com"
const password = "test"
const nombrealeatoire = Math.round(Math.random()*1000) 
console.log (nombrealeatoire)

//recup l id du label et afficher le nombre aleatoire cree ci dessus
document.getElementById("number").innerHTML=nombrealeatoire

// creer une fonction connection
function connection(){

    // creer des veriable champ
let champEmail=document.getElementById("email").value
let champpasseword=document.getElementById("passeword").value
let champnumber=document.getElementById("numberinput").value



// si il y a rien dans les champs, ca va lui envoyer  un message d'erreur
if(champEmail=="" || champpasseword==""|| champnumber==""){

// test pour voir si ca marche
document.getElementById("erreur").innerHTML = "Merci dev remplir tous les champs"
    

    }else{
       
        //Si  il y a quelques choses dans les champs, ca va lui envoye un message connecté
        if(champEmail== email && champpasseword==password&& champnumber==nombrealeatoire){
          
           //teste poufr voir si ca marche
            console.log("Vous etes connectés")   
            
        //recuperer l'id de form dan sle dom et le cacher avec le css.
        document.getElementById("form").style.display = "none"


        //recuperer la div qui possede l'attribut id= loader
        //puis on ajoute la class loader pour declencher un loader infinni
        document.getElementById("loader").classList.add ("loader")



        // creer une fonction redirection
            function redirection (){


        // Renvoie la direction d'un document
                window.location = "accueil.html";
                
            }


        // appel la fonction rediction 
            setTimeout (redirection, 3000);
           
        } else {



    //recuperer les messages d'erreurs        
    
    document.getElementById("erreur").innerHTML = "merci de verifier vos identifiant de connection"
               
        }
    }
}
       
 