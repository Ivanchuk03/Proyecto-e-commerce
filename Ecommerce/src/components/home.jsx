
import "../style/home.css"
import Destacados from "../assets/img/subcategoria_default.jpg"
import Nuevos from "../assets/img/nuevos.jpg"
function Home({product}) {
    const Sillas = product.filter ( product => product.category === "Sillas Gamers");
    const Notebooks = product.filter ( product => product.category === "Notebooks");
    return (
        <>
    <div className="carousel_div">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={Destacados}  alt="Primer slide"/>
                    <div className="carousel-text">
                        Destacados
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={Nuevos} alt="Segundo slide"/>
                    <div className="carousel-text">
                        Nuevos
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="novedades">
        Últimas novedades
        <hr />
    </div>
    <div className="contenedor_item">
        <div class="carousel-item active" className="item">
        {Sillas.map( (p) => (
            <div className="container">
            <img class="d-block w-100" className="silla" src={p.image} alt={p.tittle}/>
                <p>
                    {p.tittle}
                </p>
                <div className="price">
                    $ {p.price}
                </div>
            </div>
        ))}
    </div>
    </div>
    </>
    )
}
export default Home;