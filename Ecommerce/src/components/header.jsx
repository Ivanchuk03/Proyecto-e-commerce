import SearchBar from '../compServices/Search'
import '../Style/Header.css'
import LogoTecno from '../assets/img/zyro-image.png'



function Header ({onChangeProduct}) {


    return(
    
            <div className='headerContainer'>
                <div className='logo'>
                    <img src={LogoTecno} alt="Tecno Compra" />
                </div>
                    
                
                <div className='searchT'>
                    <SearchBar onChangeSearchProduct={onChangeProduct}/>
                </div>
                <div>
                    <button className='startSesion' >Iniciar secion</button>
                </div>
                
            </div>
            
        
    )
}

export default Header