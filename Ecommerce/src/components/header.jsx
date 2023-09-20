import SearchBar from '../compServices/Search'
import '../Style/Header.css'


const Header = () => {


    return(
        <header>
            <div>
                <img src="../assets/LogoHome-removebg-preview.png" alt="Tecno Compra" />
            </div>
            <div>
                <SearchBar/>
            </div>
            <div>
                
            </div>
        </header>
    )
}

export default Header