import SearchBar from '../compServices/Search'
import LogoTecno from '../assets/img/zyro-image.png'
import '../Style/Header.css'

/*IMPORTANTE 🧐: El logo ya no está en este componente. Lo moví a navbar.jsx para poder hacer que se recargue home 
cuando doy click en el logo. 
 */

function Header ({onChangeProduct}) {

    const OpenPopup = () =>{
        let popup = document.getElementById("popup-iniciar-sesion")
        popup.classList.add("open-popup");
    }
    const ClosePopup = ()=>{
        let popup = document.getElementById("popup-iniciar-sesion")
        popup.classList.remove("open-popup");
    }

    return(
            <div className='headerContainer'>
                <div className="logo_img">
            <img src={LogoTecno} alt="TecnoCompra"/>
            </div>
                <div className='searchT'>
                    <SearchBar onChangeSearchProduct={onChangeProduct}/>
                </div>
                <div className='startSesion'>
                    <button type='submit'>INICIAR SECION</button>
                </div>
            </div>
    )
}

export default Header