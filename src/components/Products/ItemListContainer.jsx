import './style.css'

const ItemListContainer = ({ name, avatar, description, price }) => {

    return (
        <div className='productos-container' >
            <img src={avatar} alt="" />
            <div className='cont'>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>

    )
}
export default ItemListContainer