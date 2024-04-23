import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/taxiflightbooking/Navbar.jsx'
import Aside from './FrontEnd/taxiflightbooking/Aside.jsx'
import Main from './FrontEnd/taxiflightbooking/Main.jsx'
import Footer from './FrontEnd/taxiflightbooking/Footer.jsx'

function TaxiFlight() {
  return (
    <div className='TaxiFlightBooking'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
      <footer className='footer'><Footer /></footer>
    </div>
  )
}

export default TaxiFlight