// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import descarga from '../../assets/descarga.jpeg'; 
// import logo from '../../assets/logo.jpeg'; 
// import maniki from '../../assets/maniki.jpeg'; 
// import nena from '../../assets/nena.jpeg'; 
// import publico from '../../assets/publico.jpeg'; 
// import vidriera from '../../assets/vidriera.jpeg'; 
// import './style.css'

// const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Habilitar autoplay
//     autoplaySpeed: 2500, // Intervalo de tiempo en milisegundos
//   };
  
//   const slides = [
//     {
//       id: 1,
//       image: vidriera,
//       caption: 'Descripción de la imagen 1',
//     },
//     {
//       id: 2,
//       image: publico,
//       caption: 'Descripción de la imagen 2',
//     },
//     {
//       id: 3,
//       image: nena,
//       caption: 'Descripción de la imagen 2',
//     },
//     {
//       id: 4,
//       image: maniki,
//       caption: 'Descripción de la imagen 2',
//     },
//     {
//       id: 5,
//       image: logo,
//       caption: 'Descripción de la imagen 2',
//     },
//     {
//       id: 6,
//       image: descarga,
//       caption: 'Descripción de la imagen 2',
//     },
//     // Agrega más objetos de diapositivas según tus necesidades
//   ];

//   const MySlider = () => {
//     return (
//       <Slider {...sliderSettings}>
//         {slides.map((slide) => (
//           <div key={slide.id}>
//             <img src={slide.image} alt={slide.caption} className='imagenslide'/>
//             <p>{slide.caption}</p>
//           </div>
//         ))}
//       </Slider>
//     );
//   };
  
//   export default MySlider;