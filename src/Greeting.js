//En React se pueden devolver porciones de interfaz
//title es la propiedad que se pasa por parámetro a la función
//En el parámetro se esperan las propiedades title y name del objeto props
//name tiene un valor por defecto por si no se indica en el componente
export function Greeting({title, name = "User"}) { //Componente
    console.log(title, name);
    //const name = "Eze";
    const is_student = true;
    

    function add(x, y) {
        return x + y;
    }

    //Se pone entre llaves para que el código interprete la constante
    //VsCode interpreta código en unicode como un conjunto de caracteres que al final lo ve como un emoji
    return <div>
        <h1>{title}</h1>
        <h2>{name} {is_student ? "es estudiante🧐" : "no es estudiante😠"}</h2>        
        <h2>10 + 20 = {add(10, 20)}</h2>
    </div>;
}

export function UserCard({name, address, greet}) { //Componente

    //greet();
    console.log(name, address.city, greet);    

    return <>
        <h3>Nombre del usuario: {name}</h3>
        <h3>Dirección</h3>
        <ul>
            <li>{address.city}</li>            
            <li>{address.street}</li>
        </ul>
    </>
}