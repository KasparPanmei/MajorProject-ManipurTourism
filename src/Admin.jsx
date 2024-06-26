import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/admin/Navbar.jsx'
import Aside from './FrontEnd/admin/Aside.jsx'
import Main from './FrontEnd/admin/Main.jsx'

function Admin() {
  return (
    <div className='AdminBooking'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
    </div>
  )
}

export default Admin