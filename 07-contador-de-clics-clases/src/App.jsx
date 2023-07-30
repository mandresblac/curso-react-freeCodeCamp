import React from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import freeCodeCampLogo from '../public/images/freecodecamp-logo.png';

class App extends React.Component {
  // Metodo constructor
  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  // Metodo
  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  // Metodo
  reiniciarContador() {
    this.setState({ numClics: 0 });
  }

  render() {
    return (
      <>
        <div className='App'>
          <div className='freecodecamp-logo-contenedor'>
            <img
              className='freecodecamp-logo' 
              src={freeCodeCampLogo}
              alt='Logo de freeCodeCamp' />
          </div>
  
          <div className="contenedor-principal">
            <Contador numClics={this.state.numClics} />
            <Boton
              texto='Clic'
              esBotonDeClic={true}
              manejarClic={this.manejarClic} />
            <Boton
              texto='Reiniciar'
              esBotonDeClic={false}
              manejarClic={this.reiniciarContador} />
          </div>
        </div>
      </>
    )
  };
};

export default App;
