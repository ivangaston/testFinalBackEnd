/* eslint-disable react/prop-types */
import './button.css';

function Button(props) {
  
  const botonStyle = {
    backgroundColor: props.colorBoton
  }

  return (
    <div>

      <button style={botonStyle} onClick={props.onClick}>
        {props.textoBoton}
      </button>

    </div>
  )

}

export default Button;