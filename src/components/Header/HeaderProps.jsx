import PropTypes from 'prop-types'
function HeaderProps({ writer, img, me }) {
   return (
      <>
         <h1>{me}</h1>
         <p className="writer">{writer}</p>
         <div className="image-header">
            <img src={img} alt="plage avec ordinateur" />
         </div>
      </>
   )
}

HeaderProps.propType = {
   me: PropTypes.string.isRequired,
   writer: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired,
}

export default HeaderProps
