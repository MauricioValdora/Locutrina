import React from 'react';
import './style.css';
import ButtonBack from '../../input/ButtonBack'

import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../../context/context';


const ItemDetails = ({ id, name, avatar, description, price, category }) => {

    const { onAddToCart } = useContext(CartContext);

    return (
        <div className='productos-container-details'>
            <div className='cont'>
                <h1>{id}</h1>
                <img src={avatar} alt={name} className='img' />
                <h4>{name}</h4>
                <p>Descripcion: {description}</p>
                <p>Categotia: {category}</p>
                <p className='price'>${price}</p>
            </div>
            <div className='cont-btns'>
                <button className='btn' onClick={()=>onAddToCart(id)}>Agregar al carrito</button>
                <ButtonBack />
            </div>
        </div>
    );
};

export default ItemDetails;