// Peticion asincrona utilizando XMLHttpRequest
function ajax(id){
  // Paso 1 Crear una instancia del objeto XMLHttpRequest
  const conexion = new XMLHttpRequest();
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  // Paso 2 llamar metodo Open
  conexion.open("GET",url);
   // Paso 3 llamar metodo send
   conexion.send();

   // Paso 4
   conexion.onreadystatechange = function(){
      if(conexion.readyState === 4 && conexion.status === 200){
         const datos = JSON.parse(conexion.responseText);
         console.log(datos);
      }
   }
}

// Peticion asincrona utilizando Fetch
function usandoFetch(id){
   const url = `https://rickandmortyapi.com/api/character/${id}`;

   fetch(url)
   .then(response => response.json())
   .then(datos => console.log(datos))

}

usandoFetch(5);