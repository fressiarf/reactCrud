import React, { useEffect } from 'react'
import { useState } from 'react'
import ServiceProducts from '../services/ServiceProducts'

function MostrarProducts() {

    const [productos,setProductos]=useState([])

    useEffect(()=>{

       async function cargarProductos() {
            
            const dataProductos = await ServiceProducts.getProductos()

            setProductos(dataProductos)
        }
        cargarProductos()
    },[])

  return (
    <div>
         
      {productos.map((producto)=>

      <div key={producto.id}>

        <p>{producto.producto}</p>
        <input type="text" />
        <button>Editar</button>
        <button>Eliminar</button>
        <p>{producto.detalle}</p>
        <p>{producto.precio}</p>
      </div>
         
    )}

    </div>
  )
}

export default MostrarProducts