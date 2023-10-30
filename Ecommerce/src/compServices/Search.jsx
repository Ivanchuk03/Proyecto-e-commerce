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




  function irAProductos(){
  
   <Navbar id = {"true"}></Navbar>
  }


    return(
       <> 
        <form className='form_buscador'>
         
          {/* Llamo a la función con el evento OnInput, el cuál se aplica cuando el usuario cambia el valor 
          del input.  */}
            <input onClick={irAProductos}  onInput={showIcon} onChange={onChangeSearchProduct} type="search" name="search" id="search" 
              placeholder="Buscador" className='buscador' autoComplete='off'/>
            
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