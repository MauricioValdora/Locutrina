import { useContext } from 'react'
import { CartContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'
import { CarritoItem } from './CarritoItem'
import  preview  from '../../assets/preview.png'
import './style.css'

const Card =()=>{

    const navigate = useNavigate();

    const {cart, total, getTotalItemQuantity } = useContext(CartContext)
    const goToCheckout= ()=>{
        navigate('/checkOut')
    }

    return(
        <div className='contDelCont'>
        <div className='cartContainer'>
            {cart.length === 0 && 
            <div>
            <h3 className='tittleCar'>El carrito esta vacio</h3>
            <img src={preview} alt="imagenCart" className='carritoImg'/>
            </div>
            }
            {   
                <CarritoItem mostrarActions={true}/>
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