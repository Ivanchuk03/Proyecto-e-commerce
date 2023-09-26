import "../Style/Products.css"
import Filters from "./filters"
import Destacados from "../assets/img/subcategoria_default.jpg"

function Products ({products, searchProducts}){
    return (
        <main className="products">
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
        </main>
            
    )
}


export default Products