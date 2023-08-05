import './style.css'
import { Link,useNavigate } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import { useContext } from 'react'
import {CartContext} from '../../context/context'
import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants/index'
import logo from '../../assets/logo.jpeg'

const NavBar = () => {

  const { setProducts } = useContext(CartContext);

  const { products } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);

  useEffect(() => {
      if(products?.length > 0) {
          setProducts(products);
      }
  }, [products, setProducts]);

  
    const [clickedItems, setClickedItems] = useState([]);
    const navigate = useNavigate();
    const {cart}=    useContext(CartContext)

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

    const goToCart = () => {
        navigate('/cart');
    }

    return (
        <header className='nav-bar'>
           <Link to='/' className={`navbar-logo ${isClicked(5)}`}
            onClick={() => handleClick(5)}>
              
              <img src={logo} alt="" className="logo-img" />
              

              </Link> 
            <nav className="navbar-nav ">
                <ul className='lista' >
                <li   className={`list-item ${isClicked(4)}`}
            onClick={() => handleClick(4)}><Link to="/pages/home">Todo</Link></li>
                    <li  className={`list-item ${isClicked(0)}`}
            onClick={() => handleClick(0)}><Link to="products/remeras" >Remeras</Link></li>
                    <li  className={`list-item ${isClicked(1)}`}
            onClick={() => handleClick(1)}><Link to="products/gorras">Gorras</Link></li>
                    <li className={`list-item ${isClicked(2)}`}
            onClick={() => handleClick(2)}><Link to="products/pantalones">Pantalones</Link></li>
                    <li  className={`list-item ${isClicked(3)}`}
            onClick={() => handleClick(3)}><Link to="products/zapatillas">Zapatillas</Link></li>

            <li onClick={goToCart}>
            <img className="menu-cart-image" src="https://cdn-icons-png.flaticon.com/512/665/665199.png" alt="cart" />
            </li>
                   </ul>
            <div className="menu-cart-count-container">
                            <span className="menu-cart-count">{cart.length}</span>
                        </div>
            </nav>
        </header>
    )
}

export default NavBar

