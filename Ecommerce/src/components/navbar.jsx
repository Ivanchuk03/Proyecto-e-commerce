import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "../Style/navbar.css";
import Home from "./home";
import Products from "./productCards";

import NoMatch from "./noMatch"
function Navbar({products, searchProducts, key}) {
return (
<BrowserRouter>
        <nav className="Navbar_nav" aria-multiselectable="true" aria-orientation="horizontal">
        <NavLink to="/" role="button" className="homeButton">
            Home
        </NavLink>
        <NavLink className="Navbar_navlink" to="/Productos" role="button">
            Productos
        </NavLink>
        <NavLink className="Navbar_navlink" to="/SobreNosotros" role="button">
        Sobre nosotros
        </NavLink>
        </nav>
    <Routes>
        <Route path="/" element = { <Home/>}/>
        <Route path="/Productos" element = {<Products products={products} searchProducts={searchProducts} key={key}/>}/>
        
        <Route path="*" element= {<NoMatch/>}/>
    </Routes>
</BrowserRouter>
    )
}
export default Navbar;

