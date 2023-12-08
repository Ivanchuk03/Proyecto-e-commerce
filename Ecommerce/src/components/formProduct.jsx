import React from "react";
import "../Style/formProducts.css"

const Form = ({product, setProduct}) => {
    
    let url = 'http://localhost:3001/products';
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit =  () => {

        let {brand, image, price, stock, title, category} = product
        setProduct({
            ...product,
            price: parseFloat(product.price)
        })
        
        //validacion
        if(brand === '' || category === '' || price <= 0 || stock <= 0 || title === '' || image === ''){
            alert("Todos los campos son obligatorios")
            return
        }
        const requestInit = {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body:JSON.stringify(product)
        }
        fetch(url, requestInit)
        .then((res)=> (res.json()))
        .then((res)=> console.log(res));

        //reinicia el estado
        setProduct({
            brand: '',
            image: '',
            price: 0,
            stock: 0,
            title: '',
            category: ''
        })
    }
    

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="mb-3">
                <div className="mb-4">
                    <label htmlFor="brand">Marca</label>
                    <input name="brand" onChange={handleChange} id="brand" type="text" />

                    <label htmlFor="category">Categoria</label>
                    <input name="category" onChange={handleChange} id="category" type="text" />

                    <label htmlFor="price">Precio</label>
                    <input name="price" onChange={handleChange} id="price" type="number" />
                </div>
                    
                <div className="mb-4">
                    <label htmlFor="stock">Stock</label>
                    <input name="stock" onChange={handleChange} id="stock" type="number" />

                    <label htmlFor="title">Titulo</label>
                    <input name="title" onChange={handleChange} id="title" type="text" />

                    <label htmlFor="image">Imagen</label>
                    <input name="image" onChange={handleChange} id="image" type="file" />
                </div>
            </div>
                <button type="submit" className="btnUpdate">Submit</button>
        </form>
    )
    
}

export default Form;