import React from 'react';
import './style.css';
import ButtonBack from '../../input/ButtonBack'

const ItemDetails = ({ id, name, avatar, description, price, category }) => {
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
                <button className='btn'>Comprar</button>
                <ButtonBack />
            </div>
        </div>
    );
};

export default ItemDetails;