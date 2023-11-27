import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
// import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'

function Root() {
   return (
      <>
         <Header />
         <main>
            <Home />
         </main>
         <Footer />
      </>
   )
}

export default Root
