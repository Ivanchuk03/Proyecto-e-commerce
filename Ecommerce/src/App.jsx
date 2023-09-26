import { useEffect, useState } from 'react'
import Footer from "../src/components/footer"
import Header from './components/header'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [product, setProducts] = useState([])
  const [searchProduct, setSearchProducts] = useState("")
  
  const url = 'https://api.npoint.io/80b11121a2406aef6490'
  
  const handleChangeProducts = (product) => {
    setSearchProducts(product.target.value)
  }
  
  useEffect(() => {
    fetch(url)
        .then((res)=> (res.json()))
        .then((res)=> setProducts(res.products));
  },[]);
  console.log(searchProduct)
  console.log(product)

  return (
    <>
      <header>
          <Header onChangeProduct={handleChangeProducts}/>
        </header>
        <Navbar products={product} key={product.id} searchProducts={searchProduct}/>
        <footer>
              <Footer/>
        </footer>
    </>
      
    
      
          
      
      
    
    
  )
}

export default App



