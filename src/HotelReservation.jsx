import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/hotelreservation/Navbar'
import Aside from './FrontEnd/hotelreservation/Aside'
import Main from './FrontEnd/hotelreservation/Main'
import Footer from './FrontEnd/hotelreservation/Footer'

function HotelReservation() {
  return (
    <div className='HotelReservation'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
      <footer className='footer'><Footer /></footer>
    </div>
  )
}

export default HotelReservation