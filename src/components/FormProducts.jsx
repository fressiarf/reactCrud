import React, { useState } from 'react'
import ServiceProducts from '../services/ServiceProducts'
import {Link} from "react-router-dom"

function FormProducts() {

    const [nombreProducto,setNombreProducto]= useState("")
    const [detalleProducto,setDetalleProducto]= useState("")
    const [precioProducto,setPrecioProducto]= useState("")

  

    async function registroProducto() {

        if (!nombreProducto || !detalleProducto || !precioProducto) {

            console.log("Todos los campos deben estar llenos");
                 
        }
        const objProducto={
            producto:nombreProducto,
            detalle:detalleProducto,
            precio:precioProducto
        }
        const productoAlmacenado = await ServiceProducts.postProductos(objProducto)
        console.log(productoAlmacenado);
            
    }
    
  return (
    <div>

     <h2>Formulario de Registro de productos</h2>

     <h4>Nombre Producto</h4>
     <input type="text" value={nombreProducto} onChange={(evento) =>setNombreProducto(evento.target.value) } />
     <h4>Detalle Producto</h4>
     <input type="text" value={detalleProducto} onChange={(evento)=> setDetalleProducto(evento.target.value)} />
     <label >Precio Producto</label>
     <input type="number" value={precioProducto} onChange={(evento)=> setPrecioProducto(evento.target.value)} />
     
     <button onClick={registroProducto}>Guardar</button>


 



     <div>

        <Link target='_blank' to="/market">Ir al market</Link>
       
     </div>

    </div>

    

  )
}

export default FormProducts