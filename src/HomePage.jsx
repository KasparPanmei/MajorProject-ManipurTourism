import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/homepage/Navbar'
import Aside from './FrontEnd/homepage/Aside'
import Main from './FrontEnd/homepage/Main'
import Footer from './FrontEnd/homepage/Footer'

function HomePage() {
  return (
    <div className='homepage'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
      <footer className='footer'><Footer /></footer>
    </div>
  )
}

export default HomePage