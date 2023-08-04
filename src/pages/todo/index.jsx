import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants/index'
import Loading from '../../components/loader/loading'
import { useEffect, useState } from 'react'
import ItemListContainer from '../../components/Products/ItemListContainer/ItemListContainer'
import Buscador from '../../components/search/Searcher'
import { useNavigate } from 'react-router-dom';
import './style.css'
import { useContext } from 'react'
import { CartContext } from '../../context/context'

function Todo() {

    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [productFiltered, setProductFiltered] = useState([]);

    const { products } = useContext(CartContext);

    const { loading } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);

    const showDetails = (id) => {
        navigate(`/Products/${id}`)
    }

    const filterBySearch = (query) => {
        let updateProductList = [...products];

        updateProductList = updateProductList.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })

        setProductFiltered(updateProductList);
    }

    const onChange = (event) => {
        const value = event.target.value;
        setSearch(value);
        filterBySearch(value);
    }

    return (
        <>
            <Buscador onChange={onChange} />
            {search.length > 0 && productFiltered.length === 0 && <h2>Producto no encontrado</h2>}

            {
                search.length > 0 ? (
                    <div className='productsContainerBusqueda'>
                    {productFiltered.map((product) => (

                        <ItemListContainer key={product.id} {...product} showDetails={showDetails} />
                        ))
                    }
                    </div >
                ) :
                    <div className='productsContainer'>

                        {loading && <Loading />}
                        {products.map(p => {

                            if (p.category == 'Hat' || p.category == 'Shoes' || p.category == 'Shirt' || p.category == 'Pants') {
                                return (<ItemListContainer key={p.id} {...p} showDetails={showDetails} />)
                            }

                        }

                        )}

                    </div >}
        </>
    )
}

export default Todo