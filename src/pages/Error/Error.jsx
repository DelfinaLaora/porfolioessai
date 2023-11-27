// import { Link } from 'react-router-dom'
import error from '../../assets/error.webp'

function Error() {
   return (
      <div className="contener-error">
         <h2>Oups! la page que vous demandez n'existe pas.</h2>
         <a href="/">Retourner sur la page d'accueil</a>
         <img src={error} alt="error" />
      </div>
   )
}

export default Error
