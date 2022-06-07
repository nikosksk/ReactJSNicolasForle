import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../../Context/CartContext";

const Item = (props) => {
  const { cart, addProduct } = useContext(Context);

  return (
    <div className="bg-white shadow-2xl py-2 hover:scale-105">
      <Link to={"/producto/" + props.productos.id}>
        <div>
          <img
            className="h-44 w-full object-cover"
            src={props.productos.imagen}
            alt="#"
          />
        </div>
        <div className="text-2xl">{props.productos.name}</div>
        <div className="text-2xl py-3">${props.productos.price}</div>
      </Link>
      <div
        onClick={() => addProduct(props.productos)}
        className=" bg-blue-400 hover:bg-blue-600 p-5 cursor-pointer overflow-hidden py-4"
      >
        Comprar
      </div>
      
    </div>
  );
};

export default Item;
