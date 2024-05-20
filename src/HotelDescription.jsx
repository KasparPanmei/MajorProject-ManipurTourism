import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/hoteldescription/Navbar'
import Aside from './FrontEnd/hoteldescription/Aside'
import Main from './FrontEnd/hoteldescription/Main'
import Footer from './FrontEnd/hoteldescription/Footer'

function HotelDescription() {
  return (
    <div className='HotelDescription'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
      <footer className='footer'><Footer /></footer>
    </div>
  )
}

export default HotelDescription