import "../Style/Filter.css"

function Filters () {
    return (
        <section className="filters">
            <div className="ordenarPorPrecio">
                <label htmlFor="price">Ordenar por</label>
                <select  id="price">
                    <option value="all">Todos</option>
                    <option value="Mayor precio">Mayor precio</option>
                    <option value="Menor precio">Menor precio</option>
                </select>
            </div>
            <div className="category">
                <label htmlFor="category">Categoria</label>
                <select  id="category" >
                    <option value="all">Todas</option>
                    <option value="Celulares">Celulares</option>
                    <option value="Notebooks">Notebooks</option>
                    <option value="Monitores">Monitores</option>
                    <option value="Sillas gamer">Sillas Gamer</option>
                </select>
            </div>
        </section>
    )
}

export default Filters