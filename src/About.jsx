import React from 'react'
import './HomePage.css'

import Navbar from './FrontEnd/gallery/Navbar'
import Aside from './FrontEnd/gallery/Aside'
import Main from './FrontEnd/gallery/Main'
import Footer from './FrontEnd/gallery/Footer'

function Gallery() {
  return (
    <div className='Gallery'>
      <div className="gridContainer">
        <nav className='navbar'><Navbar /></nav>
        <aside className='Aside'><Aside  /></aside>
        <main className='main'><Main /></main>
      </div>
      <footer className='footer'><Footer /></footer>
    </div>
  )
}

export default Gallery