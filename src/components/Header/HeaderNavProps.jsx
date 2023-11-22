import PropTypes from 'prop-types'
function HeaderNavProps({ lien, title, className }) {
   return (
      <>
         <a className={className} href={lien} aria-label={`lien ${title}`}>
            {title}
         </a>
         <span> |</span>
      </>
   )
}

HeaderNavProps.propType = {
   title: PropTypes.string.isRequired,
   className: PropTypes.string.isRequired,
   lien: PropTypes.string.isRequired,
}

export default HeaderNavProps
