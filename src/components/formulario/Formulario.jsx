import React, { useState } from 'react';
import './style.css'
const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [mostrarMensajeIncompletos, setMostrarMensajeIncompletos] = useState(false);
  
  // Agrega más estados para otros campos del formulario

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
if (nombre || email) {
    setMostrarMensaje(true);
    setTimeout(() => {
        setMostrarMensaje(false);
      }, 5000); // 5000 milisegundos = 5 segundos
  } else {
    setMostrarMensajeIncompletos(true);
    // Lógica para manejar el envío del formulario
    setTimeout(() => {
        setMostrarMensajeIncompletos(false);
      }, 5000); // 5000 milisegundos = 5 segundos
  }}

  return (
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
                {mostrarMensaje && <p>¡Gracias, {nombre}!</p>}
                {mostrarMensajeIncompletos && <p>Primero Completar los campos</p>}

    </form>
  );
};

export default Formulario;