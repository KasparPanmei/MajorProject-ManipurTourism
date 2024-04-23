import React, {useEffect, useState} from 'react'
import Images from '../../images/Images'
import './Main.css'
import '../../HomePage.css'
import AOS from 'aos'
import 'aos/dist/aos'

function Main() {

  useEffect(() => 
  {
    AOS.init({duration:1000});
  },[]);

  const [toggle, setToggle] = useState(1);
  function updateToggle(id){
    setToggle(id)
  }
  const flightsforyou = [
    {
      link:'/',
      img:Images.imphalairport,
      title:"Imphal to Guwahati",
      briefDescription:"Flight from Imphal International Airport",
      date:"Mar 19 - Mar 26 : Round Trip"
    },
    {
      link:'/',
      img:Images.imphalairport,
      title:"Imphal to Guwahati",
      briefDescription:"Flight from Imphal International Airport",
      date:"Mar 19 - Mar 26 : Round Trip"
    },
    {
      link:'/',
      img:Images.imphalairport,
      title:"Imphal to Guwahati",
      briefDescription:"Flight from Imphal International Airport",
      date:"Mar 19 - Mar 26 : Round Trip"
    },
    {
      link:'/',
      img:Images.imphalairport,
      title:"Imphal to Guwahati",
      briefDescription:"Flight from Imphal International Airport",
      date:"Mar 19 - Mar 26 : Round Trip"
    },
    {
      link:'/',
      img:Images.imphalairport,
      title:"Imphal to Guwahati",
      briefDescription:"Flight from Imphal International Airport",
      date:"Mar 19 - Mar 26 : Round Trip"
    },
    {
      link:'/',
      img:Images.imphalairport,
      title:"Imphal to Guwahati",
      briefDescription:"Flight from Imphal International Airport",
      date:"Mar 19 - Mar 26 : Round Trip"
    },
    {
      link:'/',
      img:Images.imphalairport,
      title:"Imphal to Guwahati",
      briefDescription:"Flight from Imphal International Airport",
      date:"Mar 19 - Mar 26 : Round Trip"
    },
    {
      link:'/',
      img:Images.imphalairport,
      title:"Imphal to Guwahati",
      briefDescription:"Flight from Imphal International Airport",
      date:"Mar 19 - Mar 26 : Round Trip"
    },
  ]
  return (
    <div className="container" data-aos="zoom-in" >
      <div className="hero-container" >
          <img src={Images.flightbookinghero} alt="herocontainer" className='hero-image'/>
        <div className="Greetings-content">
          <p> We understand that every journey begins with a flight, and we're here to make sure that your flight experience is as smooth and enjoyable as possible. Whether you're jetting off for a business meeting or embarking on a dream vacation, our flight booking services are designed to cater to your every need.</p>
          <br />
          <p>Uncover the stories, sights, and flavors of your chosen destination with the guidance of passionate experts. we don't just show you around; we invite you to be part of a story that lasts a lifetime.</p>
        </div>
      </div>
      <div className="heading" data-aos="zoom-in">
                <h3>Book a Flight <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      <div className="tabs">
        <div className="tabs-content">
          <div className="top-contents">
            <div className="tab-form1 active" onClick={() =>updateToggle(1)}>
              <h2>Find a Flights</h2>
            </div>
            <div className="tab-form2" onClick={() =>updateToggle(2)}>
              <h2>Flights Status</h2>
            </div>
          </div>
          <div className={toggle === 1? "show-content" : "bottom-contents"}>
            <div className="contents">
              <form action="">
                <div className="first-row">
                  <div className="radio-contents">
                    <input type="radio" name="trip" value="oneway"/> One Way
                    <input type="radio" name="trip" value="round"/> Return Trip
                  </div>
                  <div className="select-options">
                    <select name="" id="">
                      <option value="economy">Economy</option>
                      <option value="business">Business</option>
                      <option value="premiumeconomy">Premium Economy</option>
                      <option value="firstclass">First Class</option>
                    </select>
                    <select name="" id="">
                      <label htmlFor="search">Search By</label>
                      <option value="lowestfare">Lowest fare</option>
                      <option value="refundablefare">Refundable Fare</option>
                    </select>
                    <select name="" id="">
                      <option value="airindia">Air India</option>
                      <option value="indigo">Indigo Airline</option>
                      <option value="airasia">Air Asia</option>
                    </select>
                  </div>
                </div>
                <div className="second-row">
                  <div className="second-row-contents">
                    <div className="columns">
                      <label htmlFor="to">From</label>
                      <input type="text" placeholder='City or Airport Name' required />
                    </div>
                    <div className="columns">
                      <label htmlFor="to">Depart</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="second-row-contents">
                  <div className="columns">
                      <label htmlFor="to">To</label>
                      <input type="text" placeholder='City or Airport Name' required/>
                    </div>
                    <div className="columns">
                      <label htmlFor="to">Return</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="second-row-contents">
                    <div className="columns">
                      <label htmlFor="to">Adult ( Age 18 + )</label>
                      <input type="number" />
                    </div>
                    <div className="columns">
                      <label htmlFor="to">Children ( Age 0 - 17 )</label>
                      <input type="number"  />
                    </div>
                  </div>
                </div>
                <div className="submit-btn">
                      <button type='submit'>Book a flight</button>
                    </div>
              </form>
            </div>
          </div>
          <div className={toggle === 2? "show-content" : "bottom-contents"}>
            <div className="input-columns">
              <div className="columns">
                        <label htmlFor="to">Flight Number</label>
                        <input type="text" placeholder='City or Airport Name' required />
              </div>
              <div className="columns">
                        <label htmlFor="to">From</label>
                        <input type="text" placeholder='City or Airport Name' required />
                        <div className="date">
                          <label htmlFor="to">Date</label>
                          <input type="date"  required />
                        </div>
              </div>
              <div className="columns">
                        <label htmlFor="to">To</label>
                        <input type="text" placeholder='City or Airport Name' required />
                        <div className="btn">
                          <button type="submit">
                            Find Your Flight
                          </button>
                        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heading" data-aos="zoom-in">
                <h3>Popular Flight For You <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      <div className="ExploreFlights" data-aos="zoom-in">
        <div className="flights">
          {flightsforyou.map((flightsContents, index)=>
          (
            <a href={flightsContents.link}>
              <div key={index} className="flightsContents">
                <div className="images">
                  <img src={flightsContents.img} alt={flightsContents.alt} />
                </div>
                <div className="title">
                  <h3>{flightsContents.title}</h3>
                </div>
                <div className="Description">
                  <p>{flightsContents.briefDescription}</p>
                </div>
            </div>
            </a>
          ))}
        </div>
        <div className="readmorebtn">
                  <button className='btn'> More</button>
                </div>
      </div>
    </div>
  )
}

export default Main