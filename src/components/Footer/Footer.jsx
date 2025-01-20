import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackToTop = () => {
  const navigate = useNavigate();
  const  handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <button onClick={handleBackToTop}>
      BackToTop Component
    </button>
  )
}

const Connect = () => {
  // return()
}

const Footer = () => {
  return (
    <div>
      <BackToTop/>
    </div>
  )
}

export default Footer
