import './style.css'
import { Link } from 'react-router-dom';


const Footer =()=>{

    return(
        <div className='contenedor-footer'>
            <h3>Contactanos</h3>
            <ul className='contenedor-lista'>
                <li><Link to='https://www.instagram.com/'>Instagram</Link></li>
                <li><Link>Facebook</Link></li>
                <li ><Link>Whatsapp</Link></li>
           
            </ul>   
        </div>
    )


}

export default Footer;