import '../Style/Search.css'
/* Importo un icono de lupa de React icons y lo uso en la línea 16. */
import {FaSearch} from 'react-icons/fa';


function SearchBar({onChangeSearchProduct}) {


    return(
       <> 
        <form className='form_buscador'>
         
            <input onChange={onChangeSearchProduct} type="search" name="search" id="search" placeholder="Buscador" className='buscador' autoComplete='off'/>
            
        </form>
        <div className='icono_lupa'>
           <FaSearch/> 
        </div>
         
       </>   
    )
}

export default SearchBar