import { useEffect, useState } from 'react'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/Products/ItemListContainer'
import Button from './components/input/Button'
import Buscador from './components/search/Searcher'
import './App.css'


function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://64a33fa4b45881cc0ae6415a.mockapi.io/Products');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products)
  return (
    <>
      <NavBar />
      <Buscador />
      {/* <Button numeroDeCarrito={numeroDeCarrito} /> */}
      <ItemListContainer greeting="Hola bienvenidos a locutrina" />
      <div className='productsContainer'>

        {products.map(p => (
          <ItemListContainer {...p} key={p.id} />

        ))}

      </div>
    </>
  )
}

export default App
