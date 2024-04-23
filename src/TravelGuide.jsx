import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/travelandguide/Navbar'
import Aside from './FrontEnd/travelandguide/Aside'
import Main from './FrontEnd/travelandguide/Main'
import Footer from './FrontEnd/travelandguide/Footer'

function TravelGuide() {
  return (
    <div className='TravelGuide'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
      <footer className='footer'><Footer /></footer>
    </div>
  )
}

export default TravelGuide