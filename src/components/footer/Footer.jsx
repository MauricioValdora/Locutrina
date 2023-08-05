import './style.css'
import { Link } from 'react-router-dom';


const Footer =()=>{

    return(
        <div className='contenedor-footer'>
            <div className='contacto'>
                <h3>Contactos</h3>
                <p>locutrina@gmail.com</p>
                <p>Galeria de santa teresita</p>
            </div>
            <div className='redes-sociales'>
                <h3>Redes sociales</h3>
                <ul className='contenedor-lista'>
                    <li><Link to='https://www.instagram.com/' className='Link'>Instagram</Link></li>
                    <li><Link className='Link'>Facebook </Link ></li>
                    <li ><Link className='Link'>Whatsapp</Link></li>
                </ul>   
            </div>
        </div>
    )


}

export default Footer;