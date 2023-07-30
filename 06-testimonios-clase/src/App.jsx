import './App.css'
import  Testimonio from './components/Testimonio'
import valores from './valores'

function App() {
  return (
    <>
      <div className='App'>
        <div className='contenedor-principal'>
          <h1>
            Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
          </h1>
          
          <Testimonio
            nombre={valores[0].nombre}
            pais={valores[0].pais}
            imagen={valores[0].imagen}
            cargo={valores[0].cargo}
            empresa={valores[0].empresa}
            testimonio={valores[0].testimonio}
          />

          <Testimonio
            nombre={valores[1].nombre}
            pais={valores[1].pais}
            imagen={valores[1].imagen}
            cargo={valores[1].cargo}
            empresa={valores[1].empresa}
            testimonio={valores[1].testimonio}
          />

          <Testimonio
            nombre={valores[2].nombre}
            pais={valores[2].pais}
            imagen={valores[2].imagen}
            cargo={valores[2].cargo}
            empresa={valores[2].empresa}
            testimonio={valores[2].testimonio}
          />
        </div>
      </div>
    </>
  )
}

export default App;
