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
                        <Link to="/ExplorePlaces" className={"list-style"} target='_blank'>Explore Places</Link>
                        <Link to="/TravelGuide" className={"list-style"} target='_blank'>Travel & Guides</Link>
                        <Link to="/HotelReservation" className={"list-style"} target='_blank'>Hotel Reservations</Link>
                        <Link to="/TaxiandRentVehicle" className={"list-style"} target='_blank'>Taxi & Rent Vehicle</Link>
                        <Link to="/FlightBooking" className={"list-style"} target='_blank'>Flight Booking</Link>
                        <Link to="/Camping" className={"list-style"} target='_blank'>Camping & Travelling Kits</Link>
                        <Link to="/ParkGarden" className={"list-style"} target='_blank'>Parks & Garden</Link>
                        <Link to="/Cultural" className={"list-style"} target='_blank'>Traditional & Cultural Items</Link>
                        <Link to="/About" className={"list-style"} target='_blank'>Our Gallery</Link>
                        <Link to="/Admin" className={"list-style"} target='_blank'>Admin</Link>
                    </ul>
                </nav>
      </div>
      
    </div>
  )
}

export default Aside;