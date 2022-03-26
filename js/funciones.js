const guardarContacto = (db,contacto) => {
    // setItem guardar algo dentro de ese local strorage
    //JSON.stringify toma el elemento de tipo object y lo pasa a string.
    db.setItem(contacto.id, JSON.stringify(contacto))
    //despues de guardar al contacto, que haga una redireccion forzada a que me recargue la página.
    window.location.href = "/"
}

// función cargar contactos que se va a ejecutar cada vez que se refrezque la página
const cargarContactos = (db,parentNode) =>{
    let claves = Object.keys(db)
    for(clave of claves){
        //recogemos cada uno de estos items por medio de la clave
        let contacto = JSON.parse(db.getItem(clave)) //dentro de cada variable contacto tengo un objeto al cual puedo acceder a sus propiedades
        crearContacto(parentNode,contacto,db)
    }
}

const crearContacto = (parentNode, contacto, db) =>{
    let liContacto = document.createElement('li')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoEditar = document.createElement('span')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre 
    numeroContacto.innerHTML = contacto.numero 
    direccionContacto.innerHTML = contacto.direccion  
    iconoEditar.innerHTML ='edit'
    iconoBorrar.innerHTML = 'delete_forever'

    liContacto.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'contacto')
    iconoEditar.classList.add('material-icons', 'icono-editar')
    iconoBorrar.classList.add('material-icons', 'icono-delete')
    
    iconoBorrar.onclick = ()=>{
        alert("Todavia no funciona");
    }

    iconoBorrar.onclick = ()=>{
        db.removeItem(contacto.id)
        // para que se pueda probar correctenete desde github pages
        window.location.href = "/ListadoContactosJS/"
        // si no se quisiera probar desde github pages usar:
        //window.location.href = "/"
    }

    liContacto.appendChild(nombreContacto)
    liContacto.appendChild(numeroContacto)
    liContacto.appendChild(direccionContacto)
    liContacto.appendChild(iconoEditar)
    liContacto.appendChild(iconoBorrar)
    
    parentNode.appendChild(liContacto)
}
