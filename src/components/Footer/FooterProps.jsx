import PropTypes from 'prop-types'

function FooterProps({ icon, className, url }) {
   return (
      <>
         <li>
            {' '}
            <a href={url} className="media">
               <div className={className}>
                  <div className={icon}></div>
               </div>
            </a>
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
