
import { useContext } from 'react'
import { CartContext } from '../../context/context'
import { CarritoActions } from './CarritoActions'

export const CarritoItem=({mostrarActions})=>{

    const {onAddToCart, cart,onRemoveItem, onDecreaseItem } = useContext(CartContext)

    return(

        cart?.length > 0 && cart.map((product) => (
            <div key={product.id} className='cartItem'>
                <div className='cardImageContainer'>
                    <img className='cardImage' src={product.avatar} alt={product.name} />
                </div>
                <div className='cartContentContainer'>
                    <p className='cartProductName'>{product.name}</p>
                    <p className='cartPrice'>$ {product.price}</p>
                    <p className='cartQuantity'>Cantidad: {product.quantity}</p>
                    {mostrarActions&&<CarritoActions productId={product.id} onAddToCart={onAddToCart} onRemoveItem={onRemoveItem}onDecreaseItem={onDecreaseItem}/>}
                </div>
            </div>
        ))
        )
}
