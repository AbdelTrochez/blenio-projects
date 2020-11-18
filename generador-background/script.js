const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const cssPropiedad = document.querySelector("h3");
const fondo = document.getElementById("gradient");


function cambiarFondo(){
   fondo.style.background = 
   `linear-gradient(to right, ${color1.value}, ${color2.value})`;

   
   cssPropiedad.textContent = fondo.style.background.slice(17) + ";";
}

window.onload = cambiarFondo;

color1.addEventListener("input", cambiarFondo);
color2.addEventListener("input", cambiarFondo);