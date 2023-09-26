import '../Style/Search.css'


function SearchBar({onChangeSearchProduct}) {


    return(
        <form>
            <label htmlFor=""></label>
            <input onChange={onChangeSearchProduct} type="search" name="search" id="search" placeholder="Computadoras, Memorias ram, Discos..." className='Buscador' autoComplete='off'/>
            <input type="submit" value="Buscar"  className='btnSubmit'/>
        </form>
    )
}

export default SearchBar