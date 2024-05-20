import React,{useEffect, useState} from 'react'
import Images from '../../images/Images.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './Main.css'
import axios from 'axios'
import HotelCards from '../hotelreservation/morecomponents/HotelCards.jsx'
import HotelReservations from '../hotelreservation/morecomponents/HotelReservations.jsx';
import RatingButtons from '../hotelreservation/morecomponents/RatingButtons.jsx';
import { Link } from 'react-router-dom';

function Main() {
  useEffect(()=>
  {
    AOS.init({duration:1000});
  },[]);


  const [item, setItems] = useState(HotelCards)

  const menuItems = [...new Set(HotelCards.map((val) =>val.location))]


  const filterItems = (rate) =>{
    const newItems = HotelCards.filter((newval) => newval.location === rate)
    setItems(newItems)
  }

  const topPicks = [
    {
      link:'/HotelReservation/Aurora-Boutique',
      img:Images.aurora,
      title:"Aurora-Boutique",
      briefDescription:"Rating: 4.7, Polo Ground Road, Paona Bazar, Imphal, Manipur 795001, Price: 3044/- Person  ",
    },
    {
      link:'/',
      img:Images.pikitchen,
      title:"Pi Kitchen",
      briefDescription:"Rating: 4.7, NORTH AOC, opp. KEKRUPAT, Minuthong Rd, Imphal, Manipur 795001, Price: 1660/- Person",
    },
    {
      link:'/',
      img:Images.ambrosehotel,
      title:"The Ambrose Hotel",
      briefDescription:"Rating: 4.4, 39M4+4R4, Dungrei, Junction, Ukhrul, Manipur 795142, Price:  1000/- Person",
    },
    {
      link:'/',
      img:Images.susanhotel,
      title:"Susan Residencia",
      briefDescription:"Rating: 4.7, 72CG+Q44, NH2, Senapati, Manipur 795106, Price: 2000/- Person",
    }
  ]

  const[entername, setEnterName] = useState()
  const[entercheckindate, setEnterCheckInDate] = useState()
  const[entercheckoutdate, setEnterCheckOutDate] = useState()
  const[adult, setAdult] = useState()
  const[children, setChildren] = useState()
  const[enternoofpeople, setEnterNoOfPeople] = useState()
  const[enterphoneoremail, setEnterPhoneOrEmail] = useState()
  const[roomtype, setRoomType] = useState()
  const[enternoofrooms, setEnterNoOfRooms] = useState()
  const[checkboxforwork, setCheckBoxForWork] = useState()


  const BookForQueryHotel = (e) =>
  {
    e.preventDefault();
    axios.post('http://localhost:3003/HotelReservationBooking',{entername, entercheckindate, entercheckoutdate, adult, children, enternoofrooms, enternoofpeople, enterphoneoremail, roomtype, checkboxforwork})
    .then(result => alert("Details Booked! Executive will soon be in contact with You.",result))
    .catch(err => console.log(err))
  }

  return (
    <div className='Hotelreservation' >
      <div className="herocontainer" data-aos='zoom-in'>
        <img src={Images.hotelresvhero} alt="" />
      </div>
      <div className="heading" data-aos='zoom-in'>
            <h3>Top Picks <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      {/* top picks */}
      <div className="ExploreFlights" data-aos="zoom-in">
        <div className="morepickcontents">
          {topPicks.map((toppickscontent, index)=>
          (
            <Link to={toppickscontent.link}>
              <div key={index} className="toppickscontent">
                <div className="images">
                  <img src={toppickscontent.img} alt={toppickscontent.alt} />
                </div>
                <div className="title">
                  <h3>{toppickscontent.title}</h3>
                </div>
                <div className="Description">
                  <p>{toppickscontent.briefDescription}</p>
                </div>
                <div className="readmorebtn">
                  <button className='btn'> More</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Search Hotels */}
      <div className="heading" data-aos='zoom-in'>
            <h3>Find Hotels <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      {/* find hotels  */}
      <div className="fluid-container">
       
        <RatingButtons 
            menuItems={menuItems}
            setItems={setItems}
            filterItems={filterItems}
        />
        
        <HotelReservations 
            item={item}
        />
      </div>
      {/* booking */}
      <div className="form">
        <form action="" onSubmit={BookForQueryHotel}>
          <div className="cols">
            <div className="Greetings-content">
              <h3>Book a <span>Hotel</span></h3>
            </div>
            <input type="text" name="entername" placeholder="Enter your name" id="" onChange={(e) =>setEnterName(e.target.value)} required />
            <input type="text" name="entercheckindate" placeholder="Check-in-Date" id="" onChange={(e) =>setEnterCheckInDate(e.target.value)}  required />
            <input type="number" name="enternoofpeople" placeholder="No. of people" id="" onChange={(e) =>setEnterNoOfPeople(e.target.value)}  required />
            <input type="number" name="adult" placeholder='Adult' id="" onChange={(e) =>setAdult(e.target.value)} required />
            <input type="number" name="children" placeholder='Children' id="" onChange={(e) =>setChildren(e.target.value)}   required/>
          </div>
          <div className="cols">
            <input type="text" name="enterphoneoremail" placeholder="Ph. No/ Email" id="" onChange={(e) =>setEnterPhoneOrEmail(e.target.value)}  required/>
            <input type="text" name="entercheckoutdate" placeholder="Check-Out-Date" id="" onChange={(e) =>setEnterCheckOutDate(e.target.value)}  required/>
            <div className="radio-btn">
              <div className="radioone">
                <input type="radio" name="roomtype" id="" value="Single Room" onChange={(e) =>setRoomType(e.target.value)}  />
                <label htmlFor="singleroom"></label>Single Room
              </div>
              <div className="radiotwo">
                <input type="radio" name="roomtype" id="" value="Double Room" onChange={(e) =>setRoomType(e.target.value)} />
                <label htmlFor="doubleroom"></label>Double Room
                </div>
                
            </div>
            <input type="number" name="enternoofrooms" placeholder='No. of room' id="" onChange={(e) =>setEnterNoOfRooms(e.target.value)} required />
            <div className="checkbox">
              <input type="checkbox" name="checkboxforwork" id="" onChange={(e) =>setCheckBoxForWork(e.target.value)} value="Checked"   required/>
              <label htmlFor="check">Travelling for work</label>
            </div>
            <button type="submit" className='hotelbook'>Book Now</button>
            <button type="reset" className='hotelbook'>Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Main