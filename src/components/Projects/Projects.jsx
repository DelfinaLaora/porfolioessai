import ProjectsProps from './ProjectsProps'
import { useFetch } from '../../utils/Hooks/Hooks'
import Loader from '../../utils/Style/Loader'
import ProjectTechnoProps from './ProjectTechnoProps'

function Projects() {
   const { data } = useFetch('/projet.json')
   const portfolio = data.projects
   return (
      <>
         {data === null ? (
            <Loader />
         ) : (
            <>
               <section id="contener-projet">
                  <h2>Mes projets</h2>
                  <div className="card-projet">
                     {portfolio?.map((nav, index) => (
                        <ProjectsProps
                           key={`${nav.id}-${index}`}
                           img={nav.images[1]}
                           title={nav.title}
                           imgBack={nav.images[0]}
                           startDate={nav.startDate}
                           description={nav.description.map(
                              (description, index) => (
                                 <p key={`${description.id}-${index}`}>
                                    {description}
                                 </p>
                              )
                           )}
                           competences={nav.competences_evaluees.map(
                              (competences, index) => (
                                 <p key={`${competences.id}-${index}`}>
                                    {competences}
                                 </p>
                              )
                           )}
                           url={nav.url}
                           technologies={nav.technologies.map(
                              (technologies, index) => (
                                 <ProjectTechnoProps
                                    key={`${technologies.id}-${index}`}
                                    technologie={technologies.technologie}
                                    className={technologies.className}
                                 />
                              )
                           )}
                        />
                     ))}
                  </div>
               </section>
            </>
         )}
      </>
   )
}

export default Projects
