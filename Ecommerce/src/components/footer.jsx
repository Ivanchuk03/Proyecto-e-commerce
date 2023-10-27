import "../Style/Footer.css"

/*Importo los iconos de las redes sociales:*/
import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';

function Footer() {


    return(
        
        <div className="footer">
            <div className="btn1">
                <button><span className="textBtn">Ayuda</span></button>
                <p>Si tenes sugerencias o comentarios <a href="">contactanos</a></p>
            </div>
            <div className="separadores"><p className="numeroInvicible">1</p></div>
            <div className="btn2">
                <button>Sobre nosotros</button>
                <button>Boton de arrepentimiento</button>
            </div>
            <div className="separadores"><p className="numeroInvicible">1</p></div>
            <div className="social_media">
                <p>Siguenos en</p>
                <div className="iconos_socialMedia">
                    <div>
                        <FaInstagram/>
                    </div>
                    <div>
                        <FaYoutube/>
                    </div>
                    <div>
                        <FaTiktok/>
                    </div>
                    <div>
                        <FaLinkedin/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer