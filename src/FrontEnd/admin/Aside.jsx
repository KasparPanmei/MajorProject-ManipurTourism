import React from 'react'
import './Aside.css'
import { Link } from 'react-router-dom';
function Aside() {

  return (
    <div className='aside'>
      <div className="nav-links">
      <nav>
                    <ul>
                        <Link to="/Admin" className={"list-style"}>DashBoard</Link>
                        <Link to="/Customers" className={"list-style"} >Customers</Link>
                        <Link to="/ToursBooked" className={"list-style"}>Tours Booked</Link>
                        <Link to="/TourGuidesHired" className={"list-style"} >Tour Guides Hired</Link>
                        <Link to="/HotelsBooked" className={"list-style"} >Hotels Booked</Link>
                        <p style={{marginTop:"20px", color:"var(--normal-font-color)"}}><em>*Note* Latest Booked at the bottom</em></p>
                    </ul>
                </nav>
      </div>
      
    </div>
  )
}

export default Aside;