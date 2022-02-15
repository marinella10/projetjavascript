//block 2
// Récuprer l'id du dom (html) du block 2
let block2Parent = document.getElementById("block2");

// Creer une div dans l'htmtl et le récuperer
let block2Enfant = document.createElement("div");


//Récuperrer le texte dans l'html de la variable block2Enfant
 
block2Enfant.innerHTML =
    `
    <h1 class="titre-h1">PORTEFOLIO</h1>
     <div class="line-star-parent">
        <div class="line-white"></div>
        <div class="star">
        <i class="fa fa-star fa-3x"></i>
        <i class="fa fa-star fa-3x"></i>
        <i class="fa fa-star fa-3x"></i>
               
        </div>
        <div class="line-white"></div>
    </div>
    
    <div class="card-parent">
        <div class="card-enfant">
            <div class="card">
            <img src="image/cabin.png" alt="cake" title="cake"/>
            </div>
            
            <div class="card">
            <img src="image/cake.png" alt="cake" title="cake"/>  
            </div>
            
            <div class="card">
            <img src="image/circus.png" alt="cake" title="cake"/>    
            </div>
                    
          
            <div class="card">
            <img src="image/game.png" alt="cake" title="cake"/>
            </div>
            
            <div class="card">
            <img src="image/safe.png" alt="cake" title="cake"/>
            </div>
            
            <div class="card">
            <img src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png" alt="cake" title="cake"/>
            </div>
        </div>
        
    </div>
    `

block2Parent.appendChild(block2Enfant)



   
    
   
   
