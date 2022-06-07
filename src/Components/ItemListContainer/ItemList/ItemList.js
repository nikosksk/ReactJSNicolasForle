import React from 'react'
import Item from './Item/Item'

const ItemList = (props) => {
    const products = props.productos


  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>{products.map((i)=><Item productos={i}/>)}</div>
  )
}

export default ItemList