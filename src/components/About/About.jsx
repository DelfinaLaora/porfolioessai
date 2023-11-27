import { useFetch } from '../../utils/Hooks/UseFetch'
import Loader from '../../utils/Style/Loader'

function About() {
   const { data } = useFetch('/db.json')
   const portfolio = data.basic_info

   const title = portfolio?.section_name[0].title
   const img = portfolio?.image
   const hey = portfolio?.description_title

   return (
      <>
         {data === null ? (
            <Loader />
         ) : (
            <>
               <h2>{title}</h2>
               <div className="card-a-propos">
                  <div className="cadre-a-propos-photo">
                     <img src={img} alt="Moi" />
                  </div>

                  <div className="cadre-write">
                     {hey}
                     <br />
                     {portfolio?.description.map((description, index) => (
                        <p key={`${description.id}-${index}`}>{description}</p>
                     ))}
                  </div>
               </div>
            </>
         )}
      </>
   )
}

export default About
