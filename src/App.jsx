import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cart from './Components/pages/Cart';
import Index from "./Components/pages/Index"
import PagesProductos from "./Components/pages/PagesProductos";
import SingleProducts from './Components/pages/SingleProducts';
import { CartFunction } from './Context/CartContext';



function App() {
  return (
    <>
      <Router>
        <CartFunction>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/productos" element={<PagesProductos />} />
            <Route path="/producto/:id" element={<SingleProducts />} />
            <Route path="/cart" element={<Cart />} />
            
          </Routes>
        </CartFunction>
      </Router>
    </>
  );
}

export default App;
