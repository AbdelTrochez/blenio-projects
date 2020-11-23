const myApiKey = "245d13d593a4809e9fbdeee8ffd5b3bf";
const cityName = 'Tegucigalpa'
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey}&lang=es`;

fetch(url)
.then(response=>response.json())
.then(clima=>mostrarClima(clima))

function mostrarClima(clima){
   const ciudad = clima.name;
   const temperatura = clima.main.temp;
   const textCiudad = document.querySelector("#ciudad");
   
   console.log(clima)
   textCiudad.textContent = ciudad;
}