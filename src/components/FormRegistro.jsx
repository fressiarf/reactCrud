import React, { useState } from 'react'
import ServiceUsuario from '../services/ServiceUsuario'
import {Link} from "react-router-dom"

function FormRegistro() {

    const [nombreCompleto,setNombreUsuario]= useState("")
    const [contraUsuario,setContraUsuario]= useState("")
    const [correoUsuario,setCorreoUsuario]= useState("")

  

    async function registroUsuario() {

        if (!nombreCompleto || !contraUsuario || !correoUsuario) {

            console.log("Todos los campos deben estar llenos");
                 
        }
        const objUsuario={
            nombre:nombreCompleto,
            contra:contraUsuario,
            correo:correoUsuario
        }
        const usuarioAlmacenado = await ServiceUsuario.postUsuarios(objUsuario)
        console.log(usuarioAlmacenado);
            
        setNombreUsuario ("")
        setContraUsuario ("")
        setCorreoUsuario ("")
    }
    
  return (
    <div>

     <h2>Registro</h2>

     <h4>Nombre completo</h4>
     <input type="text" value={nombreCompleto} onChange={(evento) =>setNombreUsuario(evento.target.value) } />
     <h4>Correo</h4>
     <input type="email" value={correoUsuario} onChange={(evento)=> setCorreoUsuario(evento.target.value)} />
     <h4 >Contraseña</h4>
     <input type="password" value={contraUsuario} onChange={(evento)=> setContraUsuario(evento.target.value)} />
     
     <button onClick={registroUsuario}>Registrarse</button>



     <div>

        {/* esto es para redirigir a otra pestaña */}
      {/*   <Link target='_blank' to="/market">Ir al market</Link> */}
       
     </div>

    </div>

    

  )
}

export default FormRegistro