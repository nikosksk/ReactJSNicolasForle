import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import {useParams} from 'react-router-dom'
import axios from "axios"


const SingleProducts = () => {

    const {id} = useParams();
    const [producto, setProducto] = useState([])

    useEffect(()=> {
        axios.get("../productos.json")
             .then((res)=> setProducto(res.data.producto.find((i)=>i.id===id)))
             .catch((err)=> console.log(console.log(err)))
    }, [id]);

  

  return (
    <div>
    <Navbar/>
    <div>
        <h2>{producto.name}</h2>
        <img className="h-[calc(30rem)] w-full object-cover" src={producto.imagen} alt=""/>
        <p>Descripcion: {producto.descripcion}</p>
        <p>${producto.price}</p>
       
    </div>
    <p>el id es {id}</p>
    <p>el nombre es {producto.name}</p>
    </div>
  )
}

export default SingleProducts