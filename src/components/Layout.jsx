import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom' // to render child routes

function Layout() {
  return (
    <>
    <Header />
    {/* this way we can render header and footer around all child routes as it is and only change the content(content) in between */}
    <Outlet /> 
    <Footer />
    </>
  )
}

export default Layout
