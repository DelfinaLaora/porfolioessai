import { useFetch } from '../../utils/Hooks/UseFetch'
import Loader from '../../utils/Style/Loader'
import CV from '../../assets/monCV.pdf'
import FooterProps from './FooterProps'

function Footer() {
   const { data } = useFetch('/db.json')
   const social = data.basic_info?.social
   const portfolio = data.basic_info
   const img = portfolio?.image_footer

   return (
      <>
         {data === null ? (
            <Loader />
         ) : (
            <>
               <footer>
                  <ul>
                     {social?.map((social, index) => (
                        <FooterProps
                           key={`${social}-${index}`}
                           icon={social.icon}
                           className={social.class}
                           url={social.url}
                        />
                     ))}
                  </ul>
                  <ul>
                     <li>
                        <a download="" className="monCV" href={CV}>
                           Télécharger mon CV
                        </a>
                     </li>
                     <li>
                        <a href="mailto:delphine2203.miel@gmail.com">Contact</a>
                     </li>
                  </ul>
                  <img className="footer-logo" src={img} alt="Logo Delfina" />

                  <p>© 2023 Delfina. All rights reserved</p>
               </footer>
            </>
         )}
      </>
   )
}

export default Footer
