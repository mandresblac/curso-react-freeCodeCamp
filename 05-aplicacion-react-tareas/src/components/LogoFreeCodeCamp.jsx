import freeCodeCampLogo from '../images/freecodecamp-logo.png';
import '../stylesheets/LogoFreeCodeCam.css'

function LogofreeCodeCamp() {
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo} />
    </div>
  )
}

export default LogofreeCodeCamp;