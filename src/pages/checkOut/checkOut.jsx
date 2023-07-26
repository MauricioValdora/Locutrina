import './style.css'

const CheckOut =()=>{


    return(
        <div className='checkout'>
            <h1>Check out</h1>
            <form className='inputs'>

            <input type="text" placeholder='Nombre'/>
            <input type="text" placeholder='Apellido'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Telefono'/>
            <input type="text" placeholder='Codigo postal' />
            <input type="text" placeholder='Direccion'/>
            <input type="text" placeholder='Localidad'/>
            <button type="submit">Confirmar</button>
            </form>
        </div>
    )
}

export default CheckOut