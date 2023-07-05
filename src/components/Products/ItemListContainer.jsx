import './style.css'

const ItemListContainer = ({ id, name, avatar, description, price, }) => {

    return (
        <div className='productos-container' >
            <h1>{id}</h1>
            <img src={avatar} alt="" />
            <div className='cont'>
                <h4>{name}</h4>
                <p>{description}</p>
                <p className='price'>{price}</p>
            </div>
            <button className='btn' >Detalles</button>
        </div>

    )
}
export default ItemListContainer