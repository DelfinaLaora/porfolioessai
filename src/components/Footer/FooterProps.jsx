import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function FooterProps({ icon, className, url }) {
   return (
      <>
         <li>
            {' '}
            <Link to={url} className="media">
               <div className={className}>
                  <div className={icon}></div>
               </div>
            </Link>
         </li>
      </>
   )
}

FooterProps.propType = {
   icon: PropTypes.string.isRequired,
   className: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
}

export default FooterProps
