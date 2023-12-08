import { useEffect, useState } from 'react'

import Footer from "../src/components/footer"
import Header from './components/header'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [products, setProducts] = useState([])
  const [searchProduct, setSearchProducts] = useState("")
  const [listUpdated, setListUpdated] = useState(false)
  
  
  const url = 'http://localhost:3001/products'
  
  const handleChangeProducts = (product) => {
    setSearchProducts(product.target.value)
  }
  //aplique cambios aqui
  useEffect(() => {
    const getAll = () => {
      fetch(url)
        .then((res)=> (res.json()))
        .then((res)=> setProducts(res));
    }
    getAll()
    setListUpdated(false)
  },[listUpdated]);

  
  return (
    <>
      <header>
          <Header onChangeProduct={handleChangeProducts}/>
      </header>
        <Navbar products={products} key={products.id} searchProducts={searchProduct} setListUpdated={setListUpdated}/>
    
        <footer>
              <Footer/>
        </footer>
        
    </>
  )
}

export default App;



