function Product() {
    return <div>
        <h1>Producto</h1>
    </div>
}

//Se exporta la función individualmente, al importarlo se debe hacerlo con el nombre que tiene
export function Parrafo() {
    return <p>Párrafo</p>
}

//Exporta todo el módulo, al importarlo se le puede declarar el nombre que se quiera
export default Product;