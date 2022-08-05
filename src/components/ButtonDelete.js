import React from "react";
import '../style/buttonDelete.css'

const ButtonDelete = (props) => {
  return(
    <div 
      className='button-delete'
      onClick={props.manejarDelete} >
      {props.children}
    </div>
  )
};

export default ButtonDelete;