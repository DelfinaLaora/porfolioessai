import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
// import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'

function Root() {
   return (
      <>
         <Header />
         <main>
            <Outlet />
            {/* <Home /> */}
         </main>
         <Footer />
      </>
   )
}

export default Root
