import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import '../Style/home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//Traigo las imagenes que voy a usar:
import sillas from "../assets/img/sillas.jpg"
import auricular from "../assets/img/auricular.jpg"





export default function App(){
  const [productos, setProductos ] = useState([]);

  const url = 'https://api.npoint.io/80b11121a2406aef6490';


  useEffect( () => {

      fetch(url)
       .then(res => res.json())
       .then(data => setProductos(data.products))


  } , []);

  //slcue es una propiedad para pasar los elementos de un arreglo a otro.
  
   let notebooks = productos.slice(12,16); // Los elementos 12 al 16 del arreglo productos pasan al arreglo notebooks
   let monitores = productos.slice(0,4); // Los elementos 0 al 4 del arreglo productos pasan al arreglo notebooks
  
  



  return (
    /* --------------Primer carrusel ------------------ */
   <section className='home_container'>
     <section className='primerCarrusel' >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
         autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
           <img className='img_carrusel1'  src={sillas} alt="sillas gamer"/>
         
        </SwiperSlide>
        <SwiperSlide>
           <img className='img_carrusel1'  src={auricular} alt="auricular gamer" />
    
        </SwiperSlide>
      </Swiper>
    </section> 




    <section className='segundo carrusel'>
         <p className='novedades'>
          Ultimas novedades. <br />
          <hr />
        </p>
        <Swiper
           navigation={true}
           modules={[Navigation]}
           className="mySwiper"
        >

        <SwiperSlide>
        <div className='tarjetas_container'>
           {notebooks.map ( (p) => ( 
                <div className='tarjeta'>
                   <img src={p.image} alt={p.tittle} />
                   <div className='tarjeta_title'>{p.tittle}</div>
                   <div className='tarjeta_price'> $ {p.price}</div>
                </div> 
           ) )};                  
        </div>
        </SwiperSlide>  
        <SwiperSlide>
         <div className='tarjetas_container'>
           {monitores.map ( (p) => ( 
                <div className='tarjeta'>
                   <img src={p.image} alt={p.tittle} />
                   <div className='tarjeta_title'>{p.tittle}</div>
                   <div className='tarjeta_price'> $ {p.price}</div>
                </div> 
           ) )};                  
          </div>
        
        </SwiperSlide>
  
       
      </Swiper>

    </section>
 </section> 


   )
  
}

