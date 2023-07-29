import './App.css';
import LogofreeCodeCamp from './components/LogoFreeCodeCamp';
import ListaDeTareas from './components/ListaDeTareas';

function App() {

  return (
    <>
      <div className='aplicacion-tareas'>
        <LogofreeCodeCamp />

        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
      </div>

    </>
  )
}

export default App
