import { useFetch } from '../../utils/Hooks/Hooks'
import Loader from '../../utils/Style/Loader'
import SkillsProps from './SkillsProps'

import bulle from '../../assets/Lovepik_com-400914995-bubble.png'

function Skills() {
   const { data } = useFetch('/db.json')
   const skills = data?.skills

   return (
      <>
         {data === null ? (
            <Loader />
         ) : (
            <>
               <section id="contener-skills">
                  <div className="loaderSkills">
                     <h2 className="titre-loader">Skills</h2>
                     <div>
                        <img src={bulle} className="gif-loader" alt="bulle" />
                        <a
                           className="auteur-bubble"
                           href="https://fr.lovepik.com/images/png-953675.html"
                        >
                           Bubble Png vectors by Lovepik.com
                        </a>
                     </div>

                     <div className="plate">
                        {skills?.icons.map((skills, index) => (
                           <SkillsProps
                              key={`${skills.id}-${index}`}
                              className={skills.className}
                           />
                        ))}
                     </div>
                  </div>
               </section>
            </>
         )}
      </>
   )
}

export default Skills
