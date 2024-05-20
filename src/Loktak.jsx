import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/loktak/Navbar.jsx'
import Aside from './FrontEnd/loktak/Aside.jsx'
import Main from './FrontEnd/loktak/Main.jsx'
import Footer from './FrontEnd/loktak/Footer.jsx'

function Loktak() {
  return (
    <div className='LoktakBooking'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
      <footer className='footer'><Footer /></footer>
    </div>
  )
}

export default Loktak