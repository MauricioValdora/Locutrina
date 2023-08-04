import React, { useState,useEffect } from 'react';
import './style.css';
import { CarritoItem } from '../../components/carrito/CarritoItem';
import { useContext } from 'react';
import {CartContext} from '../../context/context'
import { firebaseService } from '../../services/firebase';
import {  Link} from 'react-router-dom';
import carritocomprado from '../../assets/carritocomprado.jpg'


const CheckOut = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [completarCampo, setCompletarCampo]=useState(true);



    const {cart} = useContext(CartContext)
    const [formData, setFormData] = useState({

        nombre: '',
        apellido: '',
        email: '',
        documento: '',
        telefono: '',
        codigoPostal: '',
        direccion: '',
        localidad: '',
    
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({

        ...prevFormData,
        
        [name]: value,
        
        item:cart,
        createdAt:new Date()

    }));
  
  };

  useEffect(() => {
    const { nombre, apellido, email, documento, telefono, codigoPostal, direccion, localidad } = formData;
    const allFieldsCompleted =
      nombre && apellido && email && documento.length>8   && telefono && codigoPostal && direccion && localidad;
    setCompletarCampo(!allFieldsCompleted);
  }, [formData]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const order = await firebaseService.createOrder(formData)

  };

  return (
    <>

      {isSubmitted ? (
        <div className='compraFinalizadaContainer'>
          <h1>{`Gracias por su compra ${formData.nombre}   :)`}</h1>
          <img className='imagenCompraFinalizada' src={carritocomprado} alt="" />
          <p ><Link className='linkVolverInicio' to='/'>Volver al inicio</Link></p> 
        </div> 
      ):(
        <div>
        <h1>Check out</h1>
        <div className='checkout'>
        <form className='inputs' onSubmit={handleSubmit}>
          <input type="text" placeholder='Nombre' name='nombre' value={formData.nombre} onChange={handleChange} />
          <input type="text" placeholder='Apellido' name='apellido' value={formData.apellido} onChange={handleChange} />
          <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
          <input type="number" placeholder='Documento' name='documento' value={formData.documento} onChange={handleChange} />
          <input type="number" placeholder='Telefono' name='telefono' value={formData.telefono} onChange={handleChange} />
          <input type="number" placeholder='Codigo postal' name='codigoPostal' value={formData.codigoPostal} onChange={handleChange} />
          <input type="text" placeholder='Direccion' name='direccion' value={formData.direccion} onChange={handleChange} />
          <input type="text" placeholder='Localidad' name='localidad' value={formData.localidad} onChange={handleChange} />

          {completarCampo&&<h1>Porfavor completa todos los campos</h1>}
          <button type='submit' disabled = {completarCampo} onClick={()=>cart.splice(0)} >Confirmar</button>
        </form>
        <CarritoItem />
      </div>
      </div>
      )}
  </>
      )
};

export default CheckOut;
