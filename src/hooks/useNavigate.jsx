import { useNavigate } from 'react-router-dom';

export const Navegar = ({id}) => {
    const navigate = useNavigate();


    const showDetails = (id) => {
        navigate(`/products/${id}`)
    }
    return (
        <button onClick={() => showDetails(id)} className='btn'>Detalles</button>
    )

}