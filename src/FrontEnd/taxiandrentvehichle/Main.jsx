import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos';
import Images from '../../images/Images.jsx'
import './Main.css'
function Main() 
{
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);


  const [pickuplocation, setPickUpLocation] = useState();
  const [destination, setDestination] = useState();
  const [way, setWay] = useState();
  const [vehicle, setVehicle] = useState();
  const [pickup, setPickUp] = useState();
  const [time, setTime] = useState();

  const RentalVehicle = (e) =>
    {
      e.preventDefault();
      axios.post('http://localhost:3003/RentalVehicle', {pickuplocation, destination, way, vehicle, pickup, time})
      .then(result => alert('Details has been Booked! Executive will be in Contact with You ASAP', result))
      .catch(err =>console.log(err))
    }

  return   (
    <div className='TaxiAndRentVehicle'>
      {/* greetings content */}
      <div className="container" >
        <div className="hero-container" data-aos="zoom-in">
            <img src={Images.heroImagerental} alt="herocontainer" className="hero-image" />
          <div className="Greetings-content">
            <div className="Greetings-content">
              <h3>Our<span>Taxi Service</span></h3>
            </div>
            <p>Experience the ease and comfort of our top-tier taxi service. Whether you need a quick ride across town or a reliable transport option for your business trip, our professional drivers are here to assist you 24/7. Our well-maintained vehicles ensure a safe and pleasant journey every time. With easy booking through our mobile app, phone, or website, your next ride is just a few clicks away. Let us take you where you need to go, stress-free.</p>
            <br />
          </div>
        </div>
      </div>
      {/* end of greetings content */}
      <div className="heading" data-aos='zoom-in'>
        <h3>Request a Ride Now or Later <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      {/* booking form  */}
      <form action="" data-aos='zoom-in' onSubmit={RentalVehicle}>
      <h4>Plan Your Ride!</h4>
        <div className="form">
          <div className="locationinput">
            <div className="input-data-of-two">
              <input type="text" placeholder="Enter pick up location" name='pickuplocation' onChange={(e) =>setPickUpLocation(e.target.value)}  required/>
              <input type="text" name="destination" id="" placeholder='Enter Destination' onChange={(e) =>setDestination(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="grid-input-second-row">
            <div className="first-grid">
              <h4>Choose Ride Type!</h4>
              <div className="no-of-way-input">
                <label htmlFor="">One Way</label>
                <input type="radio" value="One Way" name='way' className='btn' onChange={(e) =>setWay(e.target.value)}/>
                <label htmlFor="">With Stop</label>
                <input type="radio" value="With Stop" name='way' className='btn' onChange={(e) =>setWay(e.target.value)}/>
                <label htmlFor="">Round Trip</label>
                <input type="radio" value="Round Trip" name='way' className='btn' onChange={(e) =>setWay(e.target.value)}/>
              </div>
              <h4>** Optional ** Choose Vehicle Type</h4>
              <div className="no-of-way-input">
                <label htmlFor="">Car</label>
                <input type="radio" value="Car" name='vehicle' className='btn' onChange={(e) =>setVehicle(e.target.value)}/>
                <label htmlFor="">Bus</label>
                <input type="radio" value="Bus" name='vehicle' className='btn'  onChange={(e) =>setVehicle(e.target.value)}/>
                <label htmlFor="">Auto</label>
                <input type="radio" value="Auto" name='vehicle' className='btn'  onChange={(e) =>setVehicle(e.target.value)}/>
                <label htmlFor="">Shuttle</label>
                <input type="radio" value="Shuttle" name='vehicle' className='btn'  onChange={(e) =>setVehicle(e.target.value)}/>
                <label htmlFor="">Bike</label>
                <input type="radio" value="Bike" name='vehicle' className='btn'  onChange={(e) =>setVehicle(e.target.value)}/>
              </div>
            </div>
            <div className="second-grid">
              <div className="icon">
                <img src={Images.clockicon} alt="" />
                <h4>Pick Up Time:</h4>
              </div>
             
              <div className="checkbox">
                <div className="first-checkbox">
                  <label htmlFor="Pickup">Pick Up Now</label>
                  <input type="radio" name="pickup" id="" value="Pick Up Now"  onChange={(e) =>setPickUp(e.target.value)} />
                </div>
                <div className="second-checkbox">
                  
                  <div className="sub-check-input">
                    <div className="moreflex-onlaterinput">
                      <label htmlFor="Pickuplater">Pick Up Later</label>
                      <input type="radio" name="pickup" id="" value="Pick Up Later"   onChange={(e) =>setPickUp(e.target.value)}/>
                    </div>
                    <input type="time" name="time" id=""  onChange={(e) =>setTime(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="Greetings-content">
                <h3>Hop In and <button type='submt' className='btn'><span>Let's Go</span></button></h3>
              </div>
            </div>
          </div>
      </form>
      {/* end of form1 */}
      {/* rent a vehicle */}
      <div className="heading" data-aos='zoom-in'>
        <h3>Our Car Rental Service <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      {/* rent form */}
      <form action="">
        <div className="rent-form">
          <div className="top-content">
            <img src={Images.iconCar} alt="" />
            <h2>Car Rentals</h2>
          </div>
          <div className="grid-form-contents">
            <div className="grid-form">
              <div className="flex-column">
                <label htmlFor="">Pick Up Location</label>
                <input type="text" name="location" id="" placeholder='Location to deliver the Car' />
              </div>
              <div className="more-flex-column">
                <div className="pickup-flex">
                  <label htmlFor="">Pick Up Date</label>
                  <input type="date" name="pickup" id="" />
                </div>
                <div className="pickup-flex">
                  <label htmlFor="">Pick Up Time</label>
                  <input type="time" name="pickup" id="" />
                </div>
              </div>
              <div className="flex-column">
                <label htmlFor="">Type of Vehicle</label>
                <select name="typeofvehicle" id="">
                  <option value="fourwheeler">Four Wheeler</option>
                  <option value="twowheeler">Two Wheeler</option>
                </select>
              </div>
            </div>
            <div className="grid-form">
              <div className="flex-column">
                  <label htmlFor="">Drop Off Location (Optional)</label>
                  <input type="text" name="pickupafteruse" id="" placeholder='Location to pick up  the Car after Use' />
              </div>
              <div className="more-flex-column">
                <div className="pickup-flex">
                  <label htmlFor="">Drop Off Date</label>
                  <input type="date" name="dropoff" id="" />
                </div>
                <div className="pickup-flex">
                  <label htmlFor="">Drop Off Time</label>
                  <input type="time" name="dropoff" id="" />
                </div>
              </div>
              <div className="next-btn">
                <Link to='/'>
                  <button type='button' className='btn'>Next</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Main