import CardWidget from './CardWidget'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <header className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top header'>
            <a href="/" className='navbar-brand'>LocuTrina</a>
            <span className='sdf'></span>
            <nav>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className='nav-item'><a href="" className='nav-link active'>Remeras</a></li>
                    <li className='nav-item'><a href="" className='nav-link active'>Pilusos</a></li>
                    <li className='nav-item'><a href="" className='nav-link active'>Pantalones</a></li>
                    <li className='nav-item'><a href="" className='nav-link active'>Shores</a></li>
                    <li className='nav-item'><a href="" className='nav-link active'>Buzos</a></li>

                </ul>
            </nav>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <CardWidget />

        </header>
    )
}

export default NavBar

