import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../Context/CartContext';
const Navbar = () => {
  const {unidades} = useContext(Context)
  return (
    <div className="h-20 w-full px-5 bg-blue-600 flex justify-between items-center ">
      <h1 className="text-2xl text-white">Mundo Online</h1>
      <ul className="flex text-white text-xl gap-4 ">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link className='relative' to="/cart">
          <i className="bx bxs-cart "></i>
          <p className='absolute text-sm -top-3 -right-5 bg-slate-600 rounded-full px-2'>{unidades}</p>
        </Link>
      </ul>
    </div>
  );
} 

export default Navbar