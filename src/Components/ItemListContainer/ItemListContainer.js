import axios from 'axios'
import React,{useState, useEffect} from 'react'
import ItemList from './ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
            setLoading(true)
            setTimeout(()=>{
            axios.get("productos.json")
            .then((res) => setProducts(res.data.productos))

            .catch()
            setLoading(false)
        }, 2000);
        },[]) 
        
        // console.log(products);

        return <div>{loading ? <h1>Cargando...</h1> : <div><ItemList productos={products}/> </div>}</div>
  
}

export default ItemListContainer