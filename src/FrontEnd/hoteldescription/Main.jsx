import React,{useEffect, useState} from 'react'
import './Main.css'
import {Link} from 'react-router-dom'
import Images from '../../images/Images'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Main() {
  useEffect(()=>
    {
      AOS.init({duration:1000});
    },[]); 

  const images =[
    {
      img1:Images.img1,
    },
    {
      img2:Images.img2,
      desc2:"Rooms",
    },
    {
      img3:Images.img3,
      desc3:"Bathrooms",
    },
    {
      img4:Images.img4,
      desc4:"Diners",
    },
  ]

  const availability =[
    {
      name: "Breakfast",
    },
    {
      name: "Wifi-All Access",
    },
    {
      name: "Private Bathroom",
    },
    {
      name: "Pet-Friendly",
    },
    {
      name: "Facility for Diable Guest",
    },
    {
      name: "Double Bedroom",
    },
    {
      name: "Public Common Room",
    },
  ]


  const reviews =[
    {
      userName:'Hirak Jyoti',
      rating: '5/5 2 Weeks ago on Gobibi.com',
      reviewtext: "It was my first visit to this Hotel. A very warm welcome was given with great service. Neat and clean rooms with good taste of foods. Only one suggestion: it would be better if the choice of breakfast is increased as it is very limited.",
    },
    {
      userName:'Jagganath Basu',
      rating: '3/5 11 Months ago on Google',
      reviewtext: "They took force fully charged by customers by giving non authentic blaming",
      response: "Response from Owner 10 Months ago",
      responsetext:"Dear Jagannath, Thank you for expressing your concern regarding the charge that we levied on you. Sir, every hotel has a damage policy. It is clearly stated in our HOUSE RULE and Damage Policy placed visibly in every room that any such instance of irreversible damage done to the hotel property will be charged and the rates are also...."
    },
  ]

  const[hotelname, setHotelName] = useState()
  const[checkindate, setCheckindate] = useState()
  const[checkoutdate, setCheckOutDate] = useState()
  const[adult, setAdult] = useState()
  const[children, setChildren] = useState()
  const[noofrooms, setNoOfRooms] = useState()


  const BookHotel = (e) =>
  {
    e.preventDefault();
    axios.post('http://localhost:3003/HotelReservation/AuroraBoutiqueBook',{hotelname, checkindate, checkoutdate, adult, children, noofrooms})
    .then(result => alert("Details Booked! Executive will soon be in contact with You.",result))
    .catch(err => console.log(err))
  }

  return (
    <div className='Aurora-Boutique'>
      <div className="booknow" data-aos="zoom-in" >
        <form action="" onSubmit={BookHotel}>
          <input type="checkbox" name="hotelname" id="" value='Aurora-Boutique' required  onChange={(e) =>setHotelName(e.target.value)}  placeholder='Aurora-Boutique'  />
          <input type="text" name="checkindate" id="" placeholder='Check-in date' onChange={(e) =>setCheckindate(e.target.value)} required/>
          <input type="text" name="checkoutdate" id="" placeholder='Check-out date' onChange={(e) =>setCheckOutDate(e.target.value)} required/>
          <input type="number" placeholder='Adult' name='adult' onChange={(e) =>setAdult(e.target.value)} required/>
          <input type="number" placeholder='Children' name='children' onChange={(e) =>setChildren(e.target.value)} required/>
          <input type="number" name="noofrooms" id="" placeholder='No. of Rooms' onChange={(e) =>setNoOfRooms(e.target.value)} required/>
          <div className="Book-btn" >
            <button className='btn' type='submit'>Book Now</button>
            <button className='btn' type='reset'>Reset</button>
        </div>
        </form>
        
      </div>
      <section className='hotel-contents' data-aos="zoom-in">
        <div className="heading" >
          <h1>AURORA BOUTIQUE</h1>
        </div>
        <div className="rating">
          <p>Rating: 4.7</p>
        </div>
        <div className="address">
        <Link to='https://maps.app.goo.gl/jLLevszys6ZrEviw8' target='_blank' className='flex-location'>
          <img src={Images.location} alt="" />
          <p>RW4P+93 Imphal, Manipur</p>
        </Link>
      </div>
      <div className="picturesofthehotel">
      {images.map((imagescontents, index) =>
      (
        <div key={index}className="imagescontents">
          <div className="f-col">
            <img src={imagescontents.img1} alt='' />
          </div>
          <div className="flexcolumn-col">
            <img src={imagescontents.img2} alt='' />
            <h4>{imagescontents.desc2}</h4>
          </div>
          <div className="t-col">
          <h4>{imagescontents.desc3}</h4>
            <img src={imagescontents.img3} alt=''/>
            
          </div>
          <div className="flexcolumn-col">
            <img src={imagescontents.img4} alt=''/>
            <h4>{imagescontents.desc4}</h4>
          </div>
        </div>
      ))}
      </div>
      <div className="availability">
        {availability.map((availabilitybtns, index) =>
        (
          <div key={index} className="availabilitybtns">
            <div className="btn">
              {availabilitybtns.name}
            </div>
          </div>
        ))}
      </div>
      <div className="reviews-and-map">
        <div className="reviews">
          <div className="Greetings-content">
            <h3>Check out the <span>Reviews</span></h3>
          </div>
          <div className="reviews">
          {reviews.map((wholereviews, index) =>
          (
            <div key={index}className="wholereviews">
              <div className="name-icons">
                <span></span>
                <p>{wholereviews.userName}</p>
              </div>
              <div className="morereviews">
                  <p>{wholereviews.rating}</p>
                  <p>{wholereviews.reviewtext}</p>     
                  <p>{wholereviews.response}</p>  
                  <p>{wholereviews.responsetext}</p>           
                </div>
            </div>
          ))}
          </div>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.691938031382!2d93.93257997519574!3d24.80600014743486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3749278581fbc019%3A0xd433ed2f4e7a9cdf!2sAurora%20Boutique%20Hotel%2C%20Imphal!5e0!3m2!1sen!2sin!4v1715533610720!5m2!1sen!2sin" width="600" height="550" title='hello aurora' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Main