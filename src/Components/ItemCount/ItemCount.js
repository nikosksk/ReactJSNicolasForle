import React, { useState } from 'react'

const ItemCount = (props) => {
    const [contador, setContador] = useState(1)
    const [stock, setStock] = useState(props.stock - 1)

    return ( <
        div >
        <
        button disabled = { contador > props.stock - 1 ? true : false }
        onClick = {
            () => {
                // if(stock <= 1){
                //   setOutStock(true)
                //   setExceedStock(false)
                // }else{
                //   setOutStock(false)
                // }
                setContador(contador + 1)
                setStock(stock - 1)
            }
        } > + < /button> <
        p > Unidades: { contador } < /p> <
        p > El stock es: { stock } < /p> <
        button disabled = { contador < 1 ? true : false }
        onClick = {
            () => {
                // if(stock >= props.stock - 1){
                //   setExceedStock(true)
                // } else {
                //   setOutStock(false)
                // }
                setContador(contador - 1)
                setStock(stock + 1)
            }
        } > - < /button> <
        div onClick = {
            () => alert("has agregado " + contador + " unidad/es y el stock restante es " + stock) } > Agregar al carrito < /div> <
        /div>
    )
}

export default ItemCount