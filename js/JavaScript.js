document.addEventListener("keydown",function(event){console.log(event)});
document.addEventListener("keydown", function(event){

    const elemento = document.getElementById("Cuerpo");

    if (event.key ==="1"){

        elemento.className = "Cuerpo1";

    }

    if (event.key ==="2"){

        elemento.className = "Cuerpo2";

    }

    if(event.key ==="3"){

        elemento.className = "Cuerpo3";

    }

    if(event.key ==="4"){

        elemento.className = "Cuerpo4";

    }
    
    if(event.key ==="5"){

        elemento.className = "Cuerpo5";

    }


});
document.addEventListener("keydown", function(event){console.log(event)});

const texto = document.getElementById("Texto");

document.addEventListener("keydown",function(event){            
       const texto = document.getElementById("Texto");
       
       if(event.key==="ArrowUp"){          

              texto.textContent="Flecha arriba";
       }

       else if(event.key==="ArrowDown"){        
              texto.textContent="Flecha abajo";


    
       }

});