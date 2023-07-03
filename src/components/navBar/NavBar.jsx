import CardWidget from '../CardWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const NavBar = () => {
    return (
        <header className='nav-bar'>
            <a href="/" className='navbar-logo'>LocuTrina</a>
            <nav className="navbar-nav ">
                <ul className='lista' >
                    <li ><a href="" >Remeras</a></li>
                    <li ><a href="" >Pilusos</a></li>
                    <li ><a href="" >Pantalones</a></li>
                    <li ><a href="" >Shores</a></li>
                    <li ><a href="" >Buzos</a></li>

                </ul>
            </nav>
       

            {/* <CardWidget counter={number} /> */}

        </header>
    )
}

export default NavBar

