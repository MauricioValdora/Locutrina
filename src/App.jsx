import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import Todo from './pages/todo/index'
import ProductDetails from './pages/products-details/ProductDetails'
import Remeras from './components/Products/categorias/Remeras'
import './App.css'
import Gorras from './components/Products/categorias/Gorras'
import Pantalones from './components/Products/categorias/Pantalones'
import Zapatillas from './components/Products/categorias/Zapatillas'
import Footer from './components/footer/Footer'
import Dashboard from './pages/dashBoard/Dashboard'
import { CartProvider } from './context/context'
import Carrito from './/components/carrito/Carrito'
import CheckOut from './pages/checkOut/checkOut'


function App() {
  return (
    <>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/pages/home' element={<Todo />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/products/remeras' element={<Remeras />} />
        <Route path='/products/gorras' element={<Gorras />} />
        <Route path='/products/pantalones' element={<Pantalones />} />
        <Route path='/products/zapatillas' element={<Zapatillas />} />
        <Route path='/cart' element={<Carrito />} />
        <Route path='/checkOut' element={<CheckOut />} />


      </Routes>
      <Footer />
      </CartProvider>
    </>
  )

}

export default App
