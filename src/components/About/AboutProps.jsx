import PropTypes from 'prop-types'

function AboutProps({ title, description, hey, img, classeName }) {
   return (
      <>
         <h2>{title}</h2>
         <div className={classeName}>
            <div className="cadre-a-propos-photo">
               <img src={img} alt="Moi" />
            </div>

            <div className="cadre-write">
               {hey}
               <br />
               {description}
            </div>
         </div>
      </>
   )
}

AboutProps.propType = {
   title: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired,
   classeName: PropTypes.string.isRequired,
   hey: PropTypes.string.isRequired,
   description: PropTypes.array.isRequired,
}

export default AboutProps
