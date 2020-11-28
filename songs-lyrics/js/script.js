const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",function(e){
   e.preventDefault();

   const artista = document.querySelector("#validationCustom01").value;
   const cancion = document.querySelector("#validationCustom02").value;
   const letraContenedor = document.getElementById("lyrics");

   if(artista!=='' && cancion !==''){
      fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`)
        .then(resp => resp.json())
        .then(lyrics => {
           if (lyrics.lyrics!==''){
            letraContenedor.innerHTML = `
               <h2 class='text-center mb-3'>${cancion} - ${artista}</h2>
               <p>${lyrics.lyrics}</p>
            `;
           } else{
            letraContenedor.innerHTML = `<h2 class='text-danger text-center'>Canción no encontrada</h2>`;
           }
        });
   }else{
      letraContenedor.innerHTML = `<h2 class='text-danger text-center'>Hay campos vacios</h2>`;
   }


   
})