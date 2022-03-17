const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregarContacto = document.querySelector('.btn-agregar-contacto');

const listadoContactos = document.querySelector('.listado-contactos')

// Acceder al local storage
const db = window.localStorage

// Evento al boton de contactos para que cuando lo pulsemos se genere una función
// y se ejecute para que nosotros podamos guardar esos datos
btnAgregarContacto.onclick = () => { 
    //creamos un objeto contacto
    let contacto = {
        id: Math.random(1,100), // utilizado para identificar al contacto
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    guardarContacto(db, contacto)
}

cargarContactos(db, listadoContactos)