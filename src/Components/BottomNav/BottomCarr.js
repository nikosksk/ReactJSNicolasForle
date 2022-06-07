import React from "react"

function Botton({texto, esBoton, manejarClick}){


    return(
        <button className={esBoton ? "boton-click" : "boton-reiniciar"}
        onClick={manejarClick}>
            {texto}
        </button>
    )
}

export default Botton()