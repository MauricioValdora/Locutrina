import { useContext } from 'react'
import { CartContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'
import './style.css'
const  Card =()=>{
    const navigate = useNavigate();

    const {cart, onAddToCart, onRemoveItem, onDecreaseItem, total, getTotalItemQuantity } = useContext(CartContext)
    const goToCheckout= ()=>{
        navigate('/checkOut')
    }
    return(
        <div>
        <div className='cartContainer'>
            <h2>Carrito</h2>
            {cart.length === 0 && <h3>Cart is empty</h3>}
            {
                cart?.length > 0 && cart.map((product) => (
                    <div key={product.id} className='cartItem'>
                        <div className='cardImageContainer'>
                            <img className='cardImage' src={product.avatar} alt={product.name} />
                        </div>
                        <div className='cartContentContainer'>
                            <p className='cartProductName'>{product.name}</p>
                            <p className='cartPrice'>$ {product.price}</p>
                            <p className='cartQuantity'>Catidad: {product.quantity}</p>
                            <div className='cartActions'>
                                <button onClick={() => onAddToCart(product.id)} className='cartButttonAdd'>+</button>
                                <button onClick={() => onDecreaseItem(product.id)} className='cartButttonDecrease'>-</button>
                                <button onClick={() => onRemoveItem(product.id)} className='cartButttonRemove'>Remove</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                cart?.length > 0 && (
                    <div className='cartDetailActions'>
                        <p className='cartItemQuantity'>Total Items: {getTotalItemQuantity()}</p>
                        <p className='cartTotal'>Total: $ {total}</p>
                        <button className='cartButttonCheckout' onClick={goToCheckout}>Comprar</button>
                    </div>
                )
            }
        </div>
    </div>
    )


}

export default Card