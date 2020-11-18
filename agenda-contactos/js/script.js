class Contacto{
   constructor(nombre,telefono,correo){
      this.nombre = nombre,
      this.telefono = telefono,
      this.correo = correo
   }
}

class Agenda {
  agregarContacto(contacto) {
    const listaContactos = document.getElementById("lista-contactos");
    const element = document.createElement("div");
    element.classList.add("tarjeta")
    element.innerHTML = `
      <p><strong>Nombre: </strong> ${contacto.nombre}</p>
      <p><strong>Telefono: </strong> ${contacto.telefono}</p>
      <p><strong>E-mail: </strong> ${contacto.correo}</p>
      <button id='eliminar'>Eliminar</button>
      `;
      
    listaContactos.appendChild(element);
  }
  eliminarContacto(elemento) {
     if (elemento.id === "eliminar") {
       elemento.parentElement.remove();
     }
  }

  limpiar(){
   const formulario = document.getElementById("formulario");
   formulario.reset();
  }
}

document.getElementById("guardar").addEventListener("click",function(e){
   const nombre = document.getElementById("nombre").value;
   const telefono = document.getElementById("telefono").value;
   const correo = document.getElementById("email").value;
   
   const contacto = new Contacto(nombre, telefono, correo);
   const agenda = new Agenda;

   agenda.agregarContacto(contacto);
   agenda.limpiar()

   e.preventDefault();
})

document.getElementById("lista-contactos").addEventListener("click", function (e) {
   const agenda = new Agenda;
   agenda.eliminarContacto(e.target);
});