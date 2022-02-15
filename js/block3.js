//Bloc 3

const block3Parent = document.getElementById("block3");

let bloc3Enfant = document.createElement("div");

bloc3Enfant.innerHTML = `
    <div class="bloc3-enfant">
    <h1 class="titre-h1">A PROPOS</h1>
     <div class="line-star-parent">
        <div class="line-white"></div>
        <div class="star">
        <i class="fa fa-star fa-3x"></i>
        <i class="fa fa-star fa-3x"></i>
        <i class="fa fa-star fa-3x"></i>
        </div>
        <div class="line-white"></div>
    </div>
    
    <div class="para-parent">
        <div class="para-gauche">
            <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete
             source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        
        <div class="para-droite">
            <p>You can create your own custom avatar for the masthead, change the
             icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
    </div>
    <button type="file" class="btn-download">Télécharger mon CV</button>
    </div>
`

block3Parent.appendChild(bloc3Enfant)