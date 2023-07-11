import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import Todo from './pages/todo/index'
import ProductDetails from './pages/products-details/ProductDetails'
import CardWidget from './components/cardWidget/CardWidget'
import Remeras from './components/Products/categorias/Remeras'
import './App.css'
import Gorras from './components/Products/categorias/Gorras'
import Pantalones from './components/Products/categorias/Pantalones'
import Zapatillas from './components/Products/categorias/Zapatillas'
import Toallas from './components/Products/categorias/Toallas'
import Footer from './components/footer/Footer'
import Dashboard from './pages/dashBoard/Dashboard'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/pages/home' element={<Todo />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/products/remeras' element={<Remeras />} />
        <Route path='/products/gorras' element={<Gorras />} />
        <Route path='/products/pantalones' element={<Pantalones />} />
        <Route path='/products/zapatillas' element={<Zapatillas />} />
        <Route path='/products/toallas' element={<Toallas />} />
      </Routes>
      <Footer />
    </>
  )

}

export default App
