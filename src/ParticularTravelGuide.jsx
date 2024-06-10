import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/particulartravelguide/Navbar'
import Aside from './FrontEnd/particulartravelguide/Aside'
import Main from './FrontEnd/particulartravelguide/Main'
import Footer from './FrontEnd/particulartravelguide/Footer'

function ParticularTravelGuide() {
  return (
    <div className='ParticularTravelGuide'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
      <footer className='footer'><Footer /></footer>
    </div>
  )
}

export default ParticularTravelGuide