import React, {useRef} from 'react'
import {Link } from 'react-router-dom'
import './Navbar.css'
import Images from '../../images/Images'
import Menu from '../../images/Icons/menu.png'
import Close from '../../images/Icons/close.png';
function Navbar() {
  const Links = [
      {name:"Home",link:"/"},
      {name:"Explore Places",link:"/ExplorePlaces"},
      {name:"Travels & Guides",link:"/TravelGuide"},
      {name:"Hotel & Reservations",link:"/HotelReservation"},
      {name:"Taxi & Rent Vehicle",link:"/RentVehicle"},
      {name:"Flight Booking",link:"/TaxiandFlightBooking"},
      {name:"Our Gallery",link:"/About"},
  ]
  const navRef = useRef();
  const showNavbar =() =>
  {
  navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div className='nav'>
      <div className="top_navbar">
        <div className="logo">
            <Link to="/"><img src={Images.Logo} alt="" /></Link>
        </div>
        <div className="login-icons">
            <ul>
              <li><a href="https://www.bing.com/?FORM=Z9FD1"  rel='noopener noreferrer'><img src={Images.Hearts} alt="hearts"/></a></li>
              <li><Link to="/Register" target='_blank'><img src={Images.User} alt="login" /></Link></li>
              <li><a href="https://www.bing.com/?FORM=Z9FD1"  rel='noopener noreferrer'><img src={Images.Notification} alt="notification" /></a></li>
            </ul>
        </div>
      </div>
      <div className="Bottom_navbar">
        <div className="nav-links">
        <nav ref={navRef}>
                      <ul>
                          {
                              Links.map((link)=>
                              (
                                  <li>
                                      <Link className={'list-style'} to={link.link}>{link.name}</Link>
                                  </li>
                              ))
                          }
                          <button className='nav-btn close-btn' onClick={showNavbar}>
                                      <img src={Close} alt="Close Bar" />
                                      </button>
                      </ul>
                  </nav>
        </div>
        <button className='nav-btn open-btn' onClick={showNavbar}>
                  <img src={Menu} alt="Menu Bar" />
              </button>   
        </div>
    </div>
  )
}

export default Navbar