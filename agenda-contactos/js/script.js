class Contacto{
   constructor(nombre, telefono, correo){
      this.nombre = nombre,
      this.telefono = telefono,
      this.correo = correo
   }
}

class Agenda {
  agregarContacto(contacto) {
     const listaContactos = document.getElementById("lista-contactos");
     const tarjeta = document.createElement("div");
     tarjeta.classList.add("tarjeta");

     tarjeta.innerHTML += `
      <p><strong>Nombre: </strong>${contacto.nombre}</p>
      <p><strong>Telefono: </strong>${contacto.telefono}</p>
      <p><strong>E-mail: </strong>${contacto.correo}</p>
      <button id='eliminar'>Eliminar</button>
     `;

      listaContactos.appendChild(tarjeta);
  }
  
  eliminarContacto(elemento){
   if(elemento.id === "eliminar"){
      elemento.parentElement.remove();
   }
  }

  limpiarFormulario(){
   const formulario = document.getElementById("formulario");
   formulario.reset();
  }
}

document.getElementById("guardar").addEventListener("click", function(e){
   const nombre = document.getElementById("nombre").value;
   const telefono = document.getElementById("telefono").value;
   const email = document.getElementById("email").value;

   const contacto = new Contacto(nombre, telefono, email);
   const agenda = new Agenda;

   agenda.agregarContacto(contacto);
   agenda.limpiarFormulario();

   e.preventDefault()
})

document.getElementById("lista-contactos").addEventListener("click",function(e){
   const agenda = new Agenda;
   agenda.eliminarContacto(e.target);
})