import React from "react"; //Importa librería React
import ReactDOM from "react-dom/client"; //Importa ReactDOM para indicar que trabajo en una aplicación web y para manipular el DOM
import { Greeting, UserCard } from "./Greeting"; //No es necesario el .js porque la herramienta create-react-app ya importa automáticamente las extensiones
import Product, { Parrafo } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { SayHello } from "./SayHello";
import { Posts } from "./Posts";

//Obtengo el div con id root del html de public para montar la aplicación ahí
//Crea elemento root
const root = ReactDOM.createRoot(document.querySelector("#root"));

//render espera elementos hijos, elementos del html y los renderiza en el elemento root
//Para que reconozca el llamado al componente dentro de etiquetas html lo pongo entre {}
//Pero es mas limpio llamar al componente como si fuera una etiqueta (etiqueta JSX) -> Si está todo en minúsculas no lo reconoce
//El tag Fragment -> <></> Evita crear contenedores adicionales y respeta la norma de React de que los componentes están dentro de un contenedor
//title es un parámetro de la función que luce como una propiedad de html. Estos parámetros se guardan en un objeto

function handleChange(e) { //Función del input:text
  console.log(e.target.value);
}

const users = [
  {
    "id": 1,
    "name": "Matias Eze",
    "image": "https://robohash.org/user1"
  },
  {
    "id": 2,
    "name": "Fer Fernando",
    "image": "https://robohash.org/user2"
  }
]

root.render(
  <>
    { //Por cada item del arreglo devuelve un div. La key es necesaria para que React identifique al item con un identificador
      users.map((user, i) => {
        return <div key={i}>
          <h2>{user.name}</h2>
          <img src={user.image} />
        </div>
      })
    }
    <Posts
      getData={async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (response.ok) {

                let data = await response.json();
                console.log(data);
            }
        }
        catch(error) {
            console.log(error);
        }
      }}
    />
    <Button
      text="Un texto"
    />
    <Button
      text="Un botón"
    />
    <input
      type="text"
      id="consoleInput"
      onChange={handleChange} //Evento que ejecuta un función
    />
    <h2>Send data</h2>
    <form onSubmit={(e) => { 
        e.preventDefault(); //Previene el comportamiento por default del submit para que no recargue la página
        console.log("Enviado") ;
      }}>
      <button>Send</button>
    </form>
    <Greeting 
      title="Hello World"
      name="Eze"
    />
    <Greeting 
      title="Hello React"
      name="Matias" 
    />
    <Greeting
      title="Hello User"
    />
    <UserCard
      name="Diego"
      amount={3000}
      address={{
        "city": "Tandil",
        "street": "Av. Espania"
      }}
      greet={() => {alert("hello")}}
    />
    <Product />
    <Parrafo />
    <TaskCard
      ready={true}
    />
    <SayHello />    
  </>
);