

const registrarUsuario=()=>{
    var correo=document.querySelector("#correo").value;
    var password=document.querySelector("#password").value;
    var nombre=document.querySelector("#nombre").value;
    console.log("Password: "+password)
    if(correo.trim()===''||
    password.trim()===''||
    nombre.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'FALTA UN CAMPO POR LLENAR',
            footer: 'CRUD CONTACTOS'
          })

    }
    
    if(!validarCorreo(correo)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'INTRODUCE UN CORREO ELECTRONICO VALIDO',
            footer: 'CRUD CONTACTOS'
        })
        return;
    }

    if(!validarPassword(password)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            html: 'INTRODUCE UN PASSWORD VÁLIDO <br> [Mayúsculas, minúsculas, números y mín. 8 Carácteres]',
            footer: 'CRUD CONTACTOS'
        })
        return;
    }

    if(!validarNombre(nombre)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'INTRODUCE UN NOMBRE VALIDO',
            footer: 'CRUD CONTACTOS'
        })
        return;
    }

}