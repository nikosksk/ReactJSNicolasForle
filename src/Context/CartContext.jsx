import React, { createContext, useState } from "react";

const Context = createContext();

const CartFunction = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [unidades, setUnidades] = useState(0);

  console.log(cart);
  console.log(total);
  console.log(unidades);

  //Agrega productos
  const addProduct = (producto, cantidad = 1) => {
    const itemExists = cart.find((i) => i.id === producto.id);
    if (itemExists) {
      const aux = cart;
      aux.map((i) => {
        if (i.id === producto.id) {
          i.cantidad = i.cantidad + cantidad;
          setUnidades(unidades + cantidad)
          setTotal(total + cantidad * producto.price)
        }
        
        return i;
      });
      setCart(aux)
    }
    if (!itemExists) {
      setCart([
        ...cart,
        {
          id: producto.id,
          name: producto.name,
          price: producto.price,
          cantidad: cantidad,
          image: producto.imagen
        },
      ]);
      setTotal(total + producto.price * cantidad);
      setUnidades(unidades + 1);
    }
  };



  //Elimina productos
  const deleteProduct = (product) => {

    const aux = cart.filter((i)=>i.id !== product.id)
    setCart(aux)
    setTotal( total - ( product.price * product.cantidad))
    setUnidades(unidades - product.cantidad)
  }

  //Eliminar todos los productos

  const deleteAll = () => {
    setCart([])
    setTotal(0)
    setUnidades(0)
  }

  return (
    <Context.Provider value={{ cart, addProduct, total, deleteProduct, unidades, deleteAll }}>{children}</Context.Provider>
  );
};

export { CartFunction, Context };
