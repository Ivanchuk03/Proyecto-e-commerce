import "../Style/Products.css"
import Filters from "./filters"
import Destacados from "../assets/img/destacados.jpg"
import Ayuda from "../components/Ayuda.jsx";
import { FaArrowUp } from 'react-icons/fa';

let scrollPosition;
let variable;

function Products ({products, searchProducts}){

    function Flecha( {props} ) {
        if(props.variable){
            return <div className="boton_subir"><FaArrowUp></FaArrowUp></div>  ;
        }
    }
    
    window.addEventListener('scroll', function () {
         scrollPosition = window.scrollY;
        if (scrollPosition > 500){
           variable = true;
        }
      })


   


    return (
        <main  className="products">
            <div >
                <img src={Destacados} alt="Destacados" />
                <Filters/>
                <ul>
                    {products.filter((productFilter)=> productFilter.tittle.toLocaleLowerCase().includes(searchProducts.toLocaleLowerCase())).map((p)=>(
                    <li key={p.id}>
                        <img 
                            src={p.image} 
                            alt={p.tittle}
                            className="img" />
                        <div>
                            <strong>{p.tittle}</strong>
                        </div>
                        <div>
                            <div>
                                <h3>${p.price}</h3>
                                <br />
                                <button>AGREGAR AL CARRITO</button>
                            </div>
                        </div>
                    </li>
                    ))
                    
                    }
                    
                </ul>
            
            </div>
            <Flecha para = {variable} >

            </Flecha>
          
             
               
    
             
        </main>
            
    )
}


export default Products