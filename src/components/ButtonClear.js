import React from "react";
import '../style/buttonClear.css'

const ButtonClear = (props) => {
  return(
    <div 
      className='button-clear'
      onClick={props.manejarClear} >
      {props.children}
    </div>
  )
};

export default ButtonClear;