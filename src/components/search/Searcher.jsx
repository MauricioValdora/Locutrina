import './styles.css'

function Buscador() {

    return (
        <div className='contenedor-buscador'>
            <input type="text" placeholder='Buscar' className='buscador'/>
            <button className='btn'><span class="material-symbols-outlined">search</span></button>
        </div>
    )

}

export default Buscador;