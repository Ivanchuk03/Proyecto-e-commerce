import React, { useRef, useEffect, useState } from 'react';

import "../Style/Products.css"
import Form from "./formProduct.jsx"
import Filters from "./filters"
import Destacados from "../assets/img/destacados.jpg"
import { FaArrowUp } from 'react-icons/fa';


function Products ({products, searchProducts, setListUpdated}){


    const [product, setProduct] = useState({
        brand: '',
        image: '',
        price: 0,
        stock: 0,
        title: '',
        category: ''
    })

/*------------------Este código es para hacer la flecha de volver arriba-------------------*/
    //Creo una variable
    const reference_arrow = useRef(null);

  //Esta función es para el usuario vaya al principio cuando haga click en la flecha.
    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // "smooth" para un desplazamiento suave
        });
    }

    //Eliminar productos
    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:3001/products/' + id, requestInit)
        .then((res)=> (res.json()))
        .then((res)=> console.log(res));

        setListUpdated(true)
    }

    //Actualizar productos
    const handleUpdate = id => {
        const requestInit = {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body:JSON.stringify(product)
        }
        fetch('http://localhost:3001/products/' + id, requestInit)
        .then((res)=> (res.json()))
        .then((res)=> console.log(res));

        //Reinicia el estado
        setProduct({
            brand: '',
            image: '',
            price: 0,
            stock: 0,
            title: '',
            category: ''
        })

        setListUpdated(true)
    }

  //Para hacer que flecha aparezca y desaparezca a partir de un determinado punto.
    useEffect(() => {
        //Guardo la referencia del elemento div que contiene la flecha (línea 95) en la variable flecha
        const arrow = reference_arrow.current;

        window.addEventListener('scroll', function () {
           //Se guardan la cantidad de píxeles de  scroll vertical            
        let scrollPosition = window.scrollY;
    
           //Cuando el usuario llegue o pase de los 300 píxeles, aparece la flecha.
           //Cuando el usuario no llega a los 300 píxeles, la flecha desaparece.
            if(scrollPosition >= 300){
            arrow.classList.remove("invisible_arrow");
            arrow.classList.add("visible_arrow");
            }
            if(scrollPosition < 300){
                arrow.classList.remove("visible_arrow");
                arrow.classList.add("invisible_arrow");
            }
        })
    }, []);

/*--------------------------------------------------------------------------------------------------------------*/

    return (
        <main  className="products">
            <div >
                <img src={Destacados} alt="Destacados" />
                <Filters/>
                <ul>
                    {products.filter((productFilter)=> productFilter.title.toLocaleLowerCase().includes(searchProducts.toLocaleLowerCase())).map((p)=>(
                    <li key={p.id}>
                        <img 
                            src={p.image} 
                            alt={p.title}
                            className="img" />
                        <div>
                            <strong>{p.title}</strong>
                        </div>
                        <div>
                            <div>
                                <h3>${p.price}</h3>
                                <br />
                                <button>AGREGAR AL CARRITO</button>
                                <div className='nm-3'>
                                    <button onClick={() => handleDelete(p.id)} className='btnDel'>Eliminar</button>
                                    <button onClick={() => handleUpdate(p.id)} className='btnUp'>Actualizar</button>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                    ))
                    
                    }
                    
                </ul>
            
            </div>
            <Form product={product} setProduct={setProduct}/>

            {/* Esta es la etiqueta cuyo contenido es la flecha. 
                El atributo ref me sirve para referenciar al elemento.
            */}
            
            <span ref={reference_arrow} onClick={goTop} className='invisible_arrow'> 
            <FaArrowUp/> 
            </span>  
        </main>  
    )
}


export default Products