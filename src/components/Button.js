import React from "react";
import '../style/button.css'

function Button(props){

  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '='); //si no es un num y . y = , return true
  };

  return(
    <div
     className={`button-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
     onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
};

export default Button;