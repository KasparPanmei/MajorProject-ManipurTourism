import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/admin/hotelsbooked/Navbar.jsx'
import Aside from './FrontEnd/admin/hotelsbooked/Aside.jsx'
import Main from './FrontEnd/admin/hotelsbooked/Main.jsx'

function HotelsBooked() {
  return (
    <div className='hotelsbookedBooking'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
    </div>
  )
}

export default HotelsBooked
