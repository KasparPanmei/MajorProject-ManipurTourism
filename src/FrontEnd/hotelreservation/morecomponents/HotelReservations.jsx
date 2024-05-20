import React from "react"
import './HotelReservations.css'
import { Link } from "react-router-dom"
function HotelReservations({item}) {

  
  return (
    <div className="flex-body">
      <div className='hotelcontainer'data-aos="zoom-in" >
      {item.map((cards) =>(
        <Link to={cards.link}>
          <div key={cards.id} className="cards" >
          <div className="imageContent">
            <img src={cards.img} alt={cards.alt} />
          </div>
          <div className="contents" >
            <h3>{cards.name}</h3>
            <p>Address : {cards.address}</p>
            <p>Rating : {cards.rating}</p>
            <p>Price : {cards.price}</p>
          </div>
          <button onClick={()=> alert(`You clicked the button for ${cards.name}`)}>Book Now</button>
        </div>
        </Link>
      ))}
    </div>
    
    </div>
  )
}

export default HotelReservations