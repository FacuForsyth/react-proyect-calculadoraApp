 import React from 'react';
import './App.css';
import Button from './components/Button.js';
import ButtonClear from './components/ButtonClear.js';
import Pantalla from './components/Pantalla.js';
import imagenFacundo from './img/imagenFacundo.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import ButtonDelete from './components/ButtonDelete';

function App() {

  const [input, setInput] = useState('');

  //const simbolos = ('+', '-', '*', '/');

  const agregarInput = (val) => {
    //if(val === '.' && input.includes('.')) return 
    //setInput(input.toString() + val.toString());
    setInput(input + val);
  };

  const deleteInput = () => {
    var input2 = input.toString().slice(0, -1);
    setInput(input2);
  }

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));    //tenemos que immportar esta funcion, va a calcular el resultado
    } else {
      alert('Por favor ingresar valores para calcular')
    };
  };

  return (
    <div className='App'>
      <div className='facundo-logo-contenedor'>
        <img 
          src={imagenFacundo}
          className='facundo-logo'
          alt='Logo Facundo' />
      </div>
      <div className='calculadora-contenedor'>
        <Pantalla input={input} />
        <div className='fila'>
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}>2</Button>
          <Button manejarClic={agregarInput}>3</Button>
          <Button manejarClic={agregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}>4</Button>
          <Button manejarClic={agregarInput}>5</Button>
          <Button manejarClic={agregarInput}>6</Button>
          <Button manejarClic={agregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}>7</Button>
          <Button manejarClic={agregarInput}>8</Button>
          <Button manejarClic={agregarInput}>9</Button>
          <Button manejarClic={agregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={calcularResultado}>=</Button>
          <Button manejarClic={agregarInput}>0</Button>
          <Button manejarClic={agregarInput}>.</Button>
          <Button manejarClic={agregarInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear manejarClear={() => setInput('')}>Clear</ButtonClear>
          <ButtonDelete manejarDelete={deleteInput}>←</ButtonDelete>
        </div>
      </div>
    </div>
  );
}

export default App;
