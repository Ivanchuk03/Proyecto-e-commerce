import SearchBar from '../compServices/Search'
import LogoTecno from '../assets/img/zyro-image.png'
import '../Style/Header.css'

/*IMPORTANTE 🧐: El logo ya no está en este componente. Lo moví a navbar.jsx para poder hacer que se recargue home 
cuando doy click en el logo. 
 */

function Header ({onChangeProduct}) {
    return(
            <div className='headerContainer'>
                <div className="logo_img">
            <img src={LogoTecno} alt="TecnoCompra"/>
            </div>
                <div className='searchT'>
                    <SearchBar onChangeSearchProduct={onChangeProduct}/>
                </div>
                <div className='startSesion'>
                    <button className="boton_iniciar">INICIAR SESON</button>
                </div>
            </div>
    )
}

export default Header