

export const CarritoActions=({onAddToCart,onDecreaseItem,onRemoveItem,productId})=>{
    return(
        <div className='cartActions'>
        <button onClick={() => onAddToCart(productId)} className='cartButttonAdd'>+</button>
        <button onClick={() => onDecreaseItem(productId)} className='cartButttonDecrease'>-</button>
        <button onClick={() => onRemoveItem(productId)} className='cartButttonRemove'>Remove</button>
    </div>
    )
}