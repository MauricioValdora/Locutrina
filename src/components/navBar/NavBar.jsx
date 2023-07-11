import CardWidget from '../cardWidget/CardWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const NavBar = () => {
    const [clickedItems, setClickedItems] = useState([]);

    const handleClick = (index) => {
      const newClickedItems = [...clickedItems];
      newClickedItems[index] = true;
      setClickedItems(newClickedItems);
  
      setTimeout(() => {
        const resetClickedItems = [...newClickedItems];
        resetClickedItems[index] = false;
        setClickedItems(resetClickedItems);
      }, 200);
    };
  
    const isClicked = (index) => {
      return clickedItems[index] ? 'clicked' : '';
    };

    return (
        <header className='nav-bar'>
           <Link to='/' className={`navbar-logo ${isClicked(5)}`}
            onClick={() => handleClick(5)}>LocuTrina</Link> 
            <nav className="navbar-nav ">
                <ul className='lista' >
                <li   className={`list-item ${isClicked(6)}`}
            onClick={() => handleClick(6)}><Link to="/pages/home">Todo</Link></li>
                    <li  className={`list-item ${isClicked(0)}`}
            onClick={() => handleClick(0)}><Link to="products/remeras" >Remeras</Link></li>
                    <li  className={`list-item ${isClicked(1)}`}
            onClick={() => handleClick(1)}><Link to="products/gorras">Gorras</Link></li>
                    <li className={`list-item ${isClicked(2)}`}
            onClick={() => handleClick(2)}><Link to="products/pantalones">Pantalones</Link></li>
                    <li  className={`list-item ${isClicked(3)}`}
            onClick={() => handleClick(3)}><Link to="products/zapatillas">Zapatillas</Link></li>
                    <li   className={`list-item ${isClicked(4)}`}
            onClick={() => handleClick(4)}><Link to="products/toallas">Toallas</Link></li>
   
                    {/* <CardWidget /> */}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar

