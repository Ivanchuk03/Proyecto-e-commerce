import "../Style/Footer.css"


function Footer() {


    return(
        
        <div className="footer">
            <div className="btn1">
                <button><span className="textBtn">Ayuda</span></button>
                <p>Si tenes sugerencias o comentarios <a href="">contactanos</a></p>
            </div>
            <div className="separadores"><p className="numeroInvicible">1</p></div>
            <div className="btn2">
                <button><span className="textBtn">Trabaja con nosotros</span></button>
                <button><span className="textBtn">Boton de arrepentimiento</span></button>
            </div>
            <div className="separadores"><p className="numeroInvicible">1</p></div>
            <div>
                <p>Siguenos en</p>
                <div>

                </div>
            </div>
        </div>
            
        
        
    )
}

export default Footer