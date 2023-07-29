import React, { useState } from 'react';
import './style.css';
import { CarritoItem } from '../../components/carrito/CarritoItem';
import { useContext } from 'react';
import {CartContext} from '../../context/context'
import { firebaseService } from '../../services/firebase';


const CheckOut = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);






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

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitted(true);


    // Now formData contains all the values from the form
    console.log(formData);
 
    const order = await firebaseService.createOrder(formData)

    // You can use the formData to send it to the server or perform any other actions.

    // Clear the form after submission
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      documento: '',
      telefono: '',
      codigoPostal: '',
      direccion: '',
      localidad: '',
    });

    // return order
  };

  return (
    <>

      {isSubmitted ? (
        <div>
          <h1>Gracias por su compra!  :)</h1>
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
          <button type='submit'>Confirmar</button>
        </form>
        <CarritoItem />
      </div>
      </div>
      )}
  </>
      )
};

export default CheckOut;
