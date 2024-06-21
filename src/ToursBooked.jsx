import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/admin/toursbooked/Navbar.jsx'
import Aside from './FrontEnd/admin/toursbooked/Aside.jsx'
import Main from './FrontEnd/admin/toursbooked/Main.jsx'

function ToursBooked() {
  return (
    <div className='ToursBookedBooking'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
    </div>
  )
}

export default ToursBooked