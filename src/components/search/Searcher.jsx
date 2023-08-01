import './styles.css'

function Buscador({onChange}) {

    return (
        <div className='contenedor-buscador'>
            <input type="text" placeholder='Buscar' className='buscador' onChange={onChange} />
        </div>
    )

}

export default Buscador;