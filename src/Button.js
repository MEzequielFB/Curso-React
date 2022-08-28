import PropTypes from "prop-types"; //Importa propTypes

export function Button({text}) {
    return <button onClick={function () {
        console.log(text);
    }}>
        {text}
    </button>
}

//Se espera que la propiedad text sea de tipo string
//La propiedad debe ser obligatoriamente declarada en el componente
Button.propTypes = {
    text: PropTypes.string.isRequired
}