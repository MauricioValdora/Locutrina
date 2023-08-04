import './style.css'
import descarga from '../../assets/descarga.jpeg'; 
import logo from '../../assets/logo.jpeg'; 
import maniki from '../../assets/maniki.jpeg'; 
import nena from '../../assets/nena.jpeg'; 
import publico from '../../assets/publico.jpeg'; 
import vidriera from '../../assets/vidriera.jpeg'; 
import Formulario from '../../components/formulario/Formulario';



const Dashboard =()=>{


    return(
        <div className='contenedorDashboard'>
        <h1>Bienvenidos a Locutrina</h1>
        <p className='marquee'>Ventas al por mayor y por menor</p>
                <div className='cont-imgs'>
                    <img src={publico} alt="publico" />
                    <img src={descarga} alt="descarga" />
                    <img src={logo} alt="logo" />
                    <img src={maniki} alt="maniki" />
                    <img src={nena} alt="nena" />
                    <img src={vidriera} alt="vidriera" />
                </div>

               <Formulario/>
   
        </div>
    )



}

export default Dashboard;