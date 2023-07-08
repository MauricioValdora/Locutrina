import { useFetch } from '../../../hooks/useFetch'
import { API_URLS } from '../../../constants/index'
import Loading from '../../loader/loading';
import { Navegar } from '../../../hooks/useNavigate';

const Zapatillas = () => {

    const { products, loading } = useFetch(`${API_URLS.PRODUCTS.url}`);
    const categorias = products
        .filter(product => product.category === 'Shoes')

    return (
        <div className='productsContainer'>

            {loading && <Loading />}
            {categorias.map(c => (
                <div className='productos-container' key={c.id}>
                    <h1>{c.id}</h1>
                    <img src={c.avatar} alt='' />
                    <div className='cont'>
                        <p>{c.description}</p>
                        <p className='price'>{c.price}</p>
                        <p>{c.category}</p>
                    </div>
                    <Navegar id={c.id} />
                </div>
            ))}
        </div>

    );
};

export default Zapatillas;