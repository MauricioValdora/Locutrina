import React, { useState } from 'react';
import './style.css'
const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [mostrarMensajeIncompletos, setMostrarMensajeIncompletos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
if (nombre && email) {
    setMostrarMensaje(true);
    setTimeout(() => {
        setMostrarMensaje(false);
      }, 5000); 
  } else {
    setMostrarMensajeIncompletos(true);
    setTimeout(() => {
        setMostrarMensajeIncompletos(false);
      }, 5000);
  }}

  return (
    <>
    <form onSubmit={handleSubmit} className='form'>
        <h3>Dejanos tu mail para recibir novedades</h3>
        <div className='inputs-form'>

                <label className='nombre'>
                    Nombre:
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </label>
                <label className='email'>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
        </div>
                <button type="submit" className='boton-form'>Enviar</button>
                {mostrarMensaje && <p>Gracias, {nombre}!</p>}
                {mostrarMensajeIncompletos && <p>Completar los campos!</p>}

    </form>
    
    </>
  );
};

export default Formulario;