import PropTypes from 'prop-types'

function SkillsProps({ className }) {
   return (
      <>
         <div>
            <div className={className}></div>
         </div>
      </>
   )
}

SkillsProps.propType = {
   className: PropTypes.string.isRequired,
}

export default SkillsProps
