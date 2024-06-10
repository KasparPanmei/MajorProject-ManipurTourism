import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/admin/Navbar'
import Aside from './FrontEnd/admin/Aside'
import Main from './FrontEnd/admin/Main'

function Admin() {
  return (
    <div className='Admin'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
    </div>
  )
}

export default Admin