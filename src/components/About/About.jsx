import { useFetch } from '../../utils/Hooks/Hooks'
import Loader from '../../utils/Style/Loader'
// import data from '../../assets/Data/db.json'
function About() {
   const { data } = useFetch('/db.json')
   const portfolio = data.basic_info
   console.log(portfolio)
   const title = portfolio?.section_name[0].title
   const className = portfolio?.section_name[0].className
   const img = portfolio?.image
   const hey = portfolio?.description_title

   return (
      <>
         {data === null ? (
            <Loader />
         ) : (
            <>
               <section id="contener-a-propos">
                  <h2>{title}</h2>
                  <div className={className}>
                     <div className="cadre-a-propos-photo">
                        <img src={img} alt="Moi" />
                     </div>

                     <div className="cadre-write">
                        {hey}
                        <br />
                        {portfolio?.description.map((description, index) => (
                           <p key={`${description.id}-${index}`}>
                              {description}
                           </p>
                        ))}
                        {/* {text} */}
                     </div>
                  </div>
               </section>
            </>
         )}
      </>
   )
}

export default About
