import React, { useEffect } from 'react'
import { useState } from 'react'
import ServiceProducts from '../services/ServiceUsuario'

function MostrarUsuario() {

    const [usuarios,setProductos]=useState([])

    useEffect(()=>{

       async function cargarUsuario() {
            
            const dataUsuarios = await ServiceProducts.getProductos()

            setProductos(dataUsuarios)
        }
        cargarUsuario()
    },[])

  return (
    <div>
         
      {usuarios.map((usuario)=>

      <div key={usuario.id}>

        <p>{usuario.usuario}</p>
        <input type="text" />
        <button>Editar</button>
        <button>Eliminar</button>
        <p>{usuario.contra}</p>
        <p>{usuario.correo}</p>
      </div>
         
    )}

    </div>
  )
}

export default MostrarUsuario