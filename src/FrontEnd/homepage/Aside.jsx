import React from 'react'
import './Aside.css'
import { Link } from 'react-router-dom';
function Aside() {

  return (
    <div className='aside'>
      <div className="nav-links">
      <nav>
                    <ul>
                        <Link to="/" className={"list-style"}>Home</Link>
                        <Link to="/TravelGuide" className={"list-style"} target='_blank'>Travel & Guides</Link>
                        <Link to="/HotelReservation" className={"list-style"} target='_blank'>Hotel Reservations</Link>
                        <Link to="/TaxiFlight" className={"list-style"} target='_blank'>Taxi & Flight Booking</Link>
                        <Link to="/Camping" className={"list-style"} target='_blank'>Camping & Travelling Kits</Link>
                        <Link to="/RentVehicle" className={"list-style"} target='_blank'>Rent Vehicle</Link>
                        <Link to="/ParkGarden" className={"list-style"} target='_blank'>Parks & Garden</Link>
                        <Link to="/Cultural" className={"list-style"} target='_blank'>Traditional & Cultural Items</Link>
                        <Link to="/About" className={"list-style"} target='_blank'>Our Gallery</Link>
                    </ul>
                </nav>
      </div>
      
    </div>
  )
}

export default Aside;