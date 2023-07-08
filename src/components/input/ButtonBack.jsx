import { useNavigate } from 'react-router-dom';

const ButtonBack = () => {

    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };

    return (
        <button className='btn' onClick={handleVolver}>Atras</button>
    );
};

export default ButtonBack;