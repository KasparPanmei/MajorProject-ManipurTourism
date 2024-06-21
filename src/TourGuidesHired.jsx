import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/admin/toursguides/Navbar.jsx'
import Aside from './FrontEnd/admin/toursguides/Aside.jsx'
import Main from './FrontEnd/admin/toursguides/Main.jsx'

function TourGuidesHired() {
  return (
    <div className='toursguidesBooking'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
    </div>
  )
}

export default TourGuidesHired
