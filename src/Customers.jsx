import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/admin/customer/Navbar.jsx'
import Aside from './FrontEnd/admin/customer/Aside.jsx'
import Main from './FrontEnd/admin/customer/Main.jsx'

function Customers() {
  return (
    <div className='customerBooking'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
    </div>
  )
}

export default Customers