import PropTypes from 'prop-types'
function HeaderNavProps({ lien, title }) {
   return (
      <>
         <a href={lien} aria-label={`lien ${title}`}>
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
