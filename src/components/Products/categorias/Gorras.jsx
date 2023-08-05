import { useFetch } from '../../../hooks/useFetch'
import { API_URLS } from '../../../constants/index'
import Loading from '../../loader/loading';
import { Navegar } from '../../../hooks/useNavigate';
import { useContext } from 'react'
import {CartContext} from '../../../context/context'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { useNavigate } from 'react-router-dom';


const Gorras = () => {
    const navigate = useNavigate();


    const { loading } = useFetch(`${API_URLS.PRODUCTS.url}`);
    const { products } = useContext(CartContext);

    const categorias = products
        .filter(product => product.category === 'Hat')

        const showDetails = (id) => {
            navigate(`/Products/${id}`)
        }
    

    return (
        <>
            <h1 className='tittleProducts'>Gorras</h1>
        <div className='productsContainer'>

            {loading && <Loading />}
            {categorias.map(c => (
              <ItemListContainer key={c.id} {...c}showDetails={showDetails}/>
            ))}
        </div>

        </>
    );
};

export default Gorras;