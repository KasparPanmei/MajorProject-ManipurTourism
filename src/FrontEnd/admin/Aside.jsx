import React from 'react'
import './Aside.css'
import { Link } from 'react-router-dom';
function Aside() {

  return (
    <div className='aside-admin'>
      <div className="nav-links">
      <nav>
                    <ul>
                        <Link to="/" className={"list-style"}>Dashboard</Link>
                        <Link to="/ExplorePlaces" className={"list-style"} target='_blank'>Log Out</Link>
                       
                    </ul>
                </nav>
      </div>
      
    </div>
  )
}

export default Aside;