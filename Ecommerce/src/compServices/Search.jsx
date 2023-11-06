import '../Style/Search.css'
import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
/* Importo un icono de lupa de React icons. */
import {IoMdSearch} from 'react-icons/io';
//mporto un ícono de X de React Icons.
import { GiCancel } from 'react-icons/gi';
import Navbar from '../components/navbar';

/*
*/

function SearchBar({onChangeSearchProduct}) {
/*-----------------------------Este es el código que uso para mostrar y ocultar el icono de X---------------------*/
   

  //Con esta función muestro y escondo el icono X.
    function showIcon(e) {
        const icon = document.getElementById("icon");
       
        
     //Cuando el usuario escribe algo, aparece la x
        if(e.target.value !== ""){
            icon.classList.remove("invisible_icon");
            icon.classList.add("visible_icon");
        } 
      //Cuando el usuario borra todo, la x desaparece.  
        if(e.target.value === ""){
            icon.classList.remove("visible_icon");
            icon.classList.add("invisible_icon");
        } 
        
    }
/*-----------------------------------------------------------------------------------------------------------*/    

    //Esta función es para limpiar el formulario cuando el usuario clickee y para hacer que la lupa apareza

    function cleanForm () {
      /*
      const reset = document.getElementById("form")
      reset.reset();
       */
       const input = document.getElementById("search");
       input.value="";
       icon.classList.remove("visible_icon");
       icon.classList.add("invisible_icon");
        input.focus();
      
   }


   /* Está función es para deshabilitar la tecla enter. No queremos que el usuario haga enter porque 
     nosotros hacemos que los productos aparezcan a medida que escribimos. */

     const form = document.getElementById("form");

   document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });

  /*Este código es para que la palabra buscador suba cuando el usuario hace focus en el form y que vuelva cuando ya no hace focus.
  
 
   */

  const input = document.getElementById("search"); 
  const label_container = document.getElementById("label_buscador");
  const span = document.getElementById("texto_buscador");

   function handleLabel() {
    span.classList.add("top");
    span.classList.add("focus");
    label_container.classList.add("focus");
    
   }

   function handleLabel2() {
    input.value = input.value.trim( );
    if (input.value.trim( ).length == 0 ){
      span.classList.remove("top");
    }
    
    span.classList.remove("focus");
    label_container.classList.remove("focus");

  }



    return(
      <> 
       
        <form    className='form_buscador'>
           {/* Borro placeholder y lo reeemplazo por un label para poder desplazar esa etiqueta cuando el usuario haga focus. */}
           
          <div> 
           
              <label  class='label_buscador' id='label_buscador' for="search"> 
                 <span id='texto_buscador'> Buscador</span>
                 <input onBlur={handleLabel2} onFocus={handleLabel}  onInput={showIcon} onChange={onChangeSearchProduct} type="search" name="search" id="search" 
                  autoComplete='off'/>
               </label>
          </div>    
            
        </form>

        <div className='icono_lupa'>
          <IoMdSearch/> 
        </div>

        {/* El contenedor de todo, el padre del icono X y el icono X */}
        <div className='container_icon'>
          <div id='icon' className='invisible_icon' onClick={cleanForm}  >
            <GiCancel></GiCancel> 
          </div>
        </div>
      </>   
    )
}

export default SearchBar