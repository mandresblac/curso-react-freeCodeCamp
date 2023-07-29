import { useState } from 'react';
import '../stylesheets/TareaFormulario.css';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    const tareaNueva = {
      id: '34545',
      texto: 'Hola'
    }
  };

  return (
    <form className="tarea-formulario" action="">
      <input
        className='tarea-input' 
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
      />

      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;