import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/exploreplaces/Navbar'
import Aside from './FrontEnd/exploreplaces/Aside'
import Main from './FrontEnd/exploreplaces/Main'
import Footer from './FrontEnd/exploreplaces/Footer'

function ExplorePlaces() {
  return (
    <div className='ExplorePlaces'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
      <footer className='footer'><Footer /></footer>
    </div>
  )
}

export default ExplorePlaces