import ItemDetails from '../../components/Products/itemDetails/ItemDetails'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants/index'
import Loading from '../../components/loader/loading';

const ProductDetails = () => {

    const { productId } = useParams();
    const { products, loading } = useFetch(`${API_URLS.PRODUCTS.url}/${productId}`)

    return (
        <div >
            {loading && <Loading />}
            <ItemDetails {...products} />
        </div>

    )
}
export default ProductDetails 
