import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/index'
import ProductDetails from './pages/products-details/ProductDetails'


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/products/:productId' element={<ProductDetails />} />

      </Routes>
    </div>
  )

}

export default App
