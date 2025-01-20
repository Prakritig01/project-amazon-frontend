import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const NavLayout = ({children}) => {
  return (
    <div>
      <Header/>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default NavLayout;
