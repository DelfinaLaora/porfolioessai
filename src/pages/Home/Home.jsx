import { useFetch } from '../../utils/Hooks/UseFetch'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'

function Home() {
   const { data } = useFetch('/db.json')

   const apropos = data.basic_info?.section_name[0].className
   const projet = data.basic_info?.section_name[1].className
   const skills = data.basic_info?.section_name[2].className

   return (
      <>
         <section id={apropos}>
            <About />
         </section>
         <section id={projet}>
            <Projects />
         </section>
         <section id={skills}>
            <Skills />
         </section>
      </>
   )
}

export default Home
