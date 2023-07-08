import CardWidget from '../cardWidget/CardWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <header className='nav-bar'>
            <a href="/" className='navbar-logo'>LocuTrina</a>
            <nav className="navbar-nav ">
                <ul className='lista' >
                    <li ><Link to="products/remeras">Remeras</Link></li>
                    <li ><Link to="products/gorras">Gorras</Link></li>
                    <li ><Link to="products/pantalones">Pantalones</Link></li>
                    <li ><Link to="products/zapatillas">Zapatillas</Link></li>
                    <li ><Link to="products/toallas">Toallas</Link></li>
                    <CardWidget />
                </ul>
            </nav>
        </header>
    )
}

export default NavBar

