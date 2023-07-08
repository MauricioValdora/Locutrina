import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants/index'
import Loading from '../../components/loader/loading'
import { useEffect, useState } from 'react'
import ItemListContainer from '../../components/Products/ItemListContainer/ItemListContainer'
import Button from '../../components/input/Button'
import Buscador from '../../components/search/Searcher'
import { useNavigate } from 'react-router-dom';
import './style.css'

function Home() {

    const navigate = useNavigate();

    const { products, loading } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);

    const showDetails = (id) => {
        navigate(`Products/${id}`)
    }

    console.log(products)
    return (
        <>
            <Buscador />
            {/* <Button numeroDeCarrito={numeroDeCarrito} /> */}
            <div className='productsContainer'>
                {loading && <Loading />}
                {products.map(p => (
                    <ItemListContainer key={p.id} {...p} showDetails={showDetails} />
                ))}

            </div>
        </>
    )
}

export default Home