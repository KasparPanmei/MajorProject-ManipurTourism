import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/taxiandrentvehichle/Navbar.jsx'
import Aside from './FrontEnd/taxiandrentvehichle/Aside.jsx'
import Main from './FrontEnd/taxiandrentvehichle/Main.jsx'
import Footer from './FrontEnd/taxiandrentvehichle/Footer.jsx'

function RentVehicle() {
  return (
    <div className='RentVehicleBooking'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
      <footer className='footer'><Footer /></footer>
    </div>
  )
}

export default RentVehicle