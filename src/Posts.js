//Otra forma de declarar un componente. No hay ninguna diferencia en usar un declaración u otra
/* export const Posts = () => {

    return <button onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }}>
        Traer datos
    </button>
} */
export const Posts = ({getData}) => {

    return <button onClick={getData}>
        Traer datos
    </button>
}