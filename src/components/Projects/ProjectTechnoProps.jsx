import PropTypes from 'prop-types'

function ProjectTechnoProps({ technologie, className }) {
   return (
      <>
         <div className="technologie">
            <h5>{technologie}</h5>
            <div className={className}></div>
         </div>
      </>
   )
}

ProjectTechnoProps.propType = {
   className: PropTypes.string.isRequired,
   technologie: PropTypes.string.isRequired,
}

export default ProjectTechnoProps
