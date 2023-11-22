import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ProjectsProps({
   img,
   imgBack,
   title,
   startDate,
   description,
   competences,
   url,
   technologies,
}) {
   const [activeCard, setActiveCard] = useState(false)

   const handleFlip = () => {
      setActiveCard(!activeCard)
   }

   return (
      <>
         <div className="container_3d">
            <div
               onClick={handleFlip}
               className={` card  ${activeCard ? 'cardFlip' : ''}`}
            >
               <div className="content-card-front">
                  <img src={img} alt={`projet ${title}`} />
               </div>
               <div className="content-card-back">
                  <div className="header-card">
                     <h3 className="title">{title}</h3>
                     <img src={imgBack} alt={`projet ${title}`} />
                     <div className="date">{startDate}</div>
                  </div>

                  <h4>Description</h4>
                  <div className="text">{description}</div>

                  <h4>Compétences évaluées</h4>
                  <div className="text">{competences}</div>

                  <h4>Technologies</h4>
                  <div className="technologies">
                     {technologies}
                     <Link className="lien-icon" to={url}>
                        Lien GhiHub
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

ProjectsProps.propType = {
   img: PropTypes.string.isRequired,
   imgBack: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   startDate: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   competences: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   technologies: PropTypes.array.isRequired,
}

export default ProjectsProps
