import React, { useContext } from "react";
import Navbar from "../Navbar";
import { Context } from "../../Context/CartContext";
const Cart = () => {
  const { cart, total, deleteProduct, unidades, deleteAll } = useContext(Context);
  console.log(cart);
  return (
    <div>
      <Navbar />
      <div className=" flex flex-col gap-4 py-4">
        {cart.map((i) => (
          <div className=" w-screen flex h-40 bg-blue-300 py-5 px-4 justify-between items-center">
            <h3>{i.name}</h3>
            <p>${i.price}</p>
            <p>Cantidad: {i.cantidad}</p>
            <img className=" h-full w-36 object-cover" src={i.image} alt="" />
            <p
              onClick={() => deleteProduct(i)}
              className=" px-4 py-2 rounded-full cursor-pointer bg-red-500 hover:bg-red-800 text-white"
            >
              x
            </p>
          </div>
        ))}
        {unidades ? (
          <>
            {" "}
            <p className="text-center">El total es ${total}</p>
            <p className="text-center">Las unidades son {unidades}</p>
            <p onClick={()=>deleteAll()} className="text-center bg-red-400 py-3">Vaciar carrito</p>
          </>
        ) : (
          <p>No hay elementos para mostrar</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
