import './style.css'

const ItemListContainer = ({ id, name, avatar, description, price, category, showDetails }) => {

    return (
        <div className='productos-container' >
            <img src={avatar} alt="" className='img'/>
            <div className='cont'>
                <h4>{name}</h4>
                <p>Descripcion: {description}</p>
                <p>Categoria: {category}</p>
                <p className='price'>${price}</p>
            </div>
            <button className='btn' onClick={() => showDetails(id)}>Detalles</button>
        </div>

    )
}
export default ItemListContainer