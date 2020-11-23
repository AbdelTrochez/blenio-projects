const urlApiLol ="http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json";
const urlImgLol = "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/";

fetch(urlApiLol)
  .then((respuesta) => respuesta.json())
  .then((datos) => mostrarCampeon(Object.values(datos.data)));

function mostrarCampeon(datos) {
  const campeones = datos.filter(campeon=>
    campeon.name === "Aatrox" || campeon.name === "Vayne" || campeon.name === "Samira" ||campeon.name === "Diana"
  )
  console.log(campeones)
  
  const panelCampeones = document.querySelector(".campeon");
  
  campeones.forEach((campeon) => {
    panelCampeones.innerHTML += `
    <div class="tarjeta">
        <img src='${urlImgLol}${campeon.image.full}'>
        <h2>Name: ${campeon.name}</h2>
        <h3>${campeon.title}</h3>
    </div>
    `;
  });
}
