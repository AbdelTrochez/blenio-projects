const myApiKey = "5aa499c6bd33c7420b29beb036e1cc6b";
const btnVer = document.querySelector("button");

btnVer.addEventListener("click",obtenerDatos)

function obtenerDatos(){
   const txtCiudad = document.getElementById("ciudad").value;
   const url = `http://api.openweathermap.org/data/2.5/weather?q=${txtCiudad}&appid=${myApiKey}&lang=es`;

   fetch(url)
     .then((response) => response.json())
     .then((clima) => mostrarClima(clima))
   
}

 function mostrarClima(clima) {
   const ciudad = clima.name;
   const temperatura = clima.main.temp;
   const divDatos = document.querySelector("#datos");

   divDatos.innerHTML = `
      <h2>${ciudad}</h2>
      <h2>${temperatura} ºF</h2>
   `;
 }