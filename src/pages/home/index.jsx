import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants/index'
import Loading from '../../components/loader/loading'
import { useEffect, useState } from 'react'
import ItemListContainer from '../../components/Products/ItemListContainer'
import Button from '../../components/input/Button'
import Buscador from '../../components/search/Searcher'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const { products, loading } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);


    console.log(products)
    return (
        <>
            <Buscador />
            {/* <Button numeroDeCarrito={numeroDeCarrito} /> */}
            <div className='productsContainer'>

                {products.map(p => (
                    <ItemListContainer key={p.id} {...p} />
                ))}

            </div>
        </>
    )
}

export default Home