import React, {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import './Main.css'
import '../../HomePage.css'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Images from '../../images/Images';
import emailjs from '@emailjs/browser'
function Main() {
  // send email form

  const form = useRef();

  // end

  useEffect(()=>
  {
    AOS.init({duration:1000});
  },[]); 
  const CarouselImages = [
    {
      src: Images.caroImage1,
      alt: "Carousel1"
    },
    {
      src: Images.caroImage2,
      alt: "Carousel2"
    },
    {
      src: Images.caroImage3,
      alt: "Carousel3"
    },
    {
      src: Images.caroImage4,
      alt: "Carousel4"
    },
    {
      src: Images.caroImage5,
      alt: "Carousel5"
    },
    {
      src: Images.caroImage6,
      alt: "Carousel6"
    },
    {
      src: Images.caroImage7,
      alt: "Carousel7"
    },
    {
      src: Images.caroImage8,
      alt: "Carousel8"
    },
    {
      src: Images.caroImage9,
      alt: "Carousel9"
    },
    {
      src: Images.caroImage10,
      alt: "Carousel10"
    },
    {
      src: Images.caroImage11,
      alt: "Carousel11"
    },
    {
      src: Images.caroImage12,
      alt: "Carousel12"
    },
    {
      src: Images.caroImage13,
      alt: "Carousel13"
    },
    {
      src: Images.caroImage14,
      alt: "Carousel14"
    },
    {
      src: Images.caroImage15,
      alt: "Carousel15"
    },
    {
      src: Images.caroImage16,
      alt: "Carousel16"
    },
    {
      src: Images.caroImage17,
      alt: "Carousel17"
    },
    {
      src: Images.caroImage18,
      alt: "Carousel18"
    },
  ]

  // Services
  const servicesData = [
    {
        link: "/",
        img: Images.travel,
        alt:"Travel", 
        head: "Travel & Guide",
        para: "We offer a travel & guide for your ease travels with us"
    },
    {
        link: "/",
        img: Images.hotel,
        alt:"Hotel", 
        head: "Hotel & Reservation",
        para: "We offer a Hotel & Reservation for your ease booking hotel with us"
    },
    {
        link: "/",
        img: Images.taxi_flight,
        alt:"Taxi & Flight", 
        head: "Taxi & Flight Booking",
        para: "We offer a Taxi & flight booking for your ease booking with us"
    },
    {
        link: "/",
        img: Images.camping,
        alt:"Camping", 
        head: "Camping & Travelling Kits",
        para: "We offer a Camping & travelling kits for your ease camping with us"
    },
    {
        link: "/",
        img: Images.rentvehicle,
        alt:"Rent Vehicle", 
        head: "Rent Vehicles",
        para: "We offer a Rental Vehicle for your rented vehicle with us"
    },
    {
        link: "/",
        img: Images.cultural,
        alt:"Cultural & Traditional Items", 
        head: "Cultural & Traditional Items",
        para: "We offer a your ease buying of cultural and traditional items with us."
    },
  ]

  // explore destination
  const  destinations = [
    {
      link: "/",
      img: Images.imphalwestheritage2,
      alt: "Kangla Fort",
      title: "Kangla Fort",
      briefDescription: "The kangla fort, is an old fortified palace at Imphal in the Manipur state of India. It is formerly situated on both side ..."
    },
    {
      link: "/",
      img: Images.ukhrulwildlife,
      alt: "Shirui Lily",
      title: "Shirui Lily",
      briefDescription: "Being one of the popular tourist attraction in ukhrul Shirui kashong peak is famous for teo thing- the Shirui ..."
    },
    {
      link: "/",
      img: Images.bishnupurheritage4,
      alt: "Japan Peace Memorial",
      title: "Japan Peace Memorial",
      briefDescription: "A renowned historic place in Manipur, this World War II site is where the Japanese soldiers joined..."
    },
    {
      link: "/",
      img: Images.tmllakeswaterfall,
      alt: "Barak Waterfall",
      title: "Barak Waterfall",
      briefDescription: "Located within the still largely unexplored forest territory of Tamenglong in the district going by..."
    },
    {
      link: "/",
      img: Images.senapatinature,
      alt: "Namaizo",
      title: "Namai zho",
      briefDescription: " Namai zho biodiversity park Koide Village, Maram Senapati, ManipurCosmos flowers blossom ..."
    },
    {
      link: "/",
      img: Images.tmlnature4,
      alt: "Tharon Cave",
      title: "Tharon Cave",
      briefDescription: "Tharon cave was once used as a shelter for thou- sands of years. It is located at a distance of appro x 27 km from ..."
    }
  ]
  // why choose us
  const  whychooseus = [
    {
        img:Images.guide,
        title:"Outstanding Guide",
        description:'Our guide is a highly experienced and knowledgeable expert in the field of digital market'
    },
    {
        img:Images.price,
        title:"Fair Prices",
        description:'we provide our valued customers with Fairness, Affordability, Integrity, and Reliability and promise an exceptional value-for-money experience.'
    },
    {
        img:Images.transport,
        title:"Transportation",
        description:' we understand that your journey matters, and we are committed to providing you with a transportation experience that exceeds your expectations.'
    },
    {
        img:Images.delivery,
        title:"Free Deliver",
        description:' we are excited to offer you the added convenience of free delivery on all your purchases.'
    },
    {
        img:Images.verifyhotel,
        title:"Verified Hotels",
        description:'For your comfortable and secure stay during your travels, we provide arigorous standards for quality, safety, and customer satisfaction.'
    },
    {
        img:Images.refund,
        title:"Refund Services",
        description:'We understand that circumstances may change, and your peace of mind matters to us. We provide customer-friendly refunds policy for every transaction you made.'
    },
  ]

  const[noofwayone, setNoofwayone] = useState()
  const[noofwaytwo, setNoofwaytwo] = useState()
  const[from, setFrom] = useState()
  const[destination, setDestination] = useState()
  const[name, setName] = useState()
  const[phone, setPhone] = useState()
  const[email, setEmail] = useState()
  const[date, setDate] = useState()
  const[number, setNumber] = useState()
  const[childrenYes, setChildrenyes] = useState()
  
  const[childrenNo, setChildrenno] = useState()
  const[dtime, setDtime] = useState()
  const[rtime, setRtime] = useState()


  
  const handleFormSubmit = (e) =>
  {
    e.preventDefault();
    axios.post('http://localhost:3003/HomePageform',{noofwayone, noofwaytwo,from,destination,name,phone,email,date,number,childrenYes,childrenNo,dtime,rtime})
    .then(result => alert("You've successfully booked an Overall Data. An Executive will be in contact with you ASAP!", result))
    .catch(err => console.log(err))
    // form
    e.preventDefault();

    emailjs
      .sendForm('service_ccwjodb', 'template_qtjhy57', form.current, {
        publicKey: '_HjchQPydeylyyBQ7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <div className='main' id='top' >
      <div className="hero-container" data-aos="zoom-in" >
        <img src={Images.heroImage} alt="" className='hero-image' />
        <div className="Greetings-content">
          <h3><span>Welcome</span> to Manipur</h3>
          <p>Embark on a journey of discovering <span>"The Jewel land of India".</span><br />where each destination is a chapter in warm hospitality</p>
          <div className="carousel-images">
            {CarouselImages.map((image_track, index) =>
            (
              <div key={index}
              className="image_track">
              <div className="slide">
                <img src={image_track.src} alt="" /></div>
            </div>
            ))}
            {CarouselImages.map((image_track, index) =>
            (
              <div key={index}
              className="image_track">
              <div className="slide">
                <img src={image_track.src} alt="" /></div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <div className="SeasonPickContainer" >
        <div className="heading">
            <h3>Season Pick for You <span className='firstrow'></span> <span className='secondrow'></span></h3>
        </div>
        <div className="imageContents">
            <div className="firstcontent">
                <Link to='/exploreplaces/districts/bishnupur/loktaklake' target='_blank'>
                  <img src={Images.bishnupurlakeswaterfall} alt={Images.label1} />
                </Link>
            </div>
            <div className="secondcontent-flex">
                <div className="topflex">
                    <div className="secondimagecontent1">
                        <img src={Images.senapaticamping} alt={Images.label2} />
                    </div>
                    <div className="secondimagecontent2">
                        <img src={Images.churchandpurlakeswaterfall2} alt={Images.label3} />
                    </div>
                </div>
                <div className="bottomflex">
                <div className="bottomflex1">
                        <img src={Images.tmllakeswaterfall2} alt={Images.label4} />
                    </div>
                    <div className="bottomflex2">
                        <img src={Images.thoubalheritage} alt={Images.label5} />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* service we provide */}
      <div className='ServiceContainer' data-aos="zoom-in" >
        
            <div className="heading">
                <h3>Services We Provide <span className='firstrow'></span> <span className='secondrow'></span></h3>
            </div>
            <div className="servicesContents">
                {servicesData.map((servicecontent, index)=>
                (
                    <a href={servicecontent.link} rel='noopener noreferrer'>
                        <div key={index} className="servicecontent">
                        <div className="gif">
                            <img src={servicecontent.img} alt={servicecontent.alt} />
                        </div>
                        <div className="head">
                            <h3>{servicecontent.head}</h3>
                        </div>
                        <div className="para">
                            <p>{servicecontent.para}</p>
                        </div>
                    </div>
                    </a>
                ))}
            </div>
        </div>

        {/* Explore Destinations */}
        <div className="ExploreDestinations" data-aos="zoom-in">
        <div className="heading">
            <h3>Explore Destination <span className='firstrow'></span> <span className='secondrow'></span></h3>
        </div>
        <div className="destinations">
          {destinations.map((destinationContents, index)=>
          (
            <a href={destinationContents.link}>
              <div key={index} className="destinationContents">
                <div className="images">
                  <img src={destinationContents.img} alt={destinationContents.alt} />
                </div>
                <div className="title">
                  <h3>{destinationContents.title}</h3>
                </div>
                <div className="Description">
                  <p>{destinationContents.briefDescription}</p>
                </div>
            </div>
            </a>
          ))}
        </div>
        <div className="readmorebtn">
                  <button className='btn'>View More</button>
                </div>
      </div>
      {/* Online Booking */}
      <div className='onlinebooking' data-aos="zoom-in" >
        <div className="heading">
            <h3>Online Booking <span className='firstrow'></span> <span className='secondrow'></span></h3>
        </div>
        <div className="bookingcontent">
            <div className="booking-first-content">
                <h3>Book a <span>Tour</span></h3>
                <br />
                <p className='first-para'>Embark on a once-in-a-lifetime adventure with our "Discover Manipur Tourism" only for tour package. Immerse yourself in the beauty, culture, and unique experiences that Manipur has to offer. </p>
                <p className='second-para'>Secure your spot on this unforgettable journey by booking now.</p>
            </div>
            <div className="booking-second-content">
                <form action="" onSubmit={handleFormSubmit } ref={form}>
                    <div className="radiobtn">
                        <input type="radio" name="noofway" value="One Way" id="way" onChange={(e) =>setNoofwayone(e.target.value)}/>One Way
                        <input type="radio" name="noofway" value="Two Way" id="way" onChange={(e) =>setNoofwaytwo(e.target.value)}/>Two Way
                    </div>
                    <div className="inputs">
                        <input type="text" name="From" id="from" placeholder='From'onChange={(e) =>setFrom(e.target.value)} required/>
                        <input type="text" name="Destination" id="to" placeholder='Destination' required onChange={(e) =>setDestination(e.target.value)} />
                        <div className="more-input-flex">
                            <input type="text" name="name" id="name" placeholder='Name' onChange={(e) =>setName(e.target.value)} required />
                            <input type="text" name="phone" id="phone" onChange={(e) =>setPhone(e.target.value)} placeholder='Phone no.' required />
                        </div>
                        <div className="more-input-flex">
                            <input type="email" name="email" id="email" placeholder='example@gmail.com' onChange={(e) =>setEmail(e.target.value)} required />
                            <label htmlFor="date">Date</label>
                            <input type="date" name="date" id="date" onChange={(e) =>setDate(e.target.value)} placeholder='date no.' required />
                        </div>
                        <div className="more-input-flex">
                            <input type="number" name="number" id="number" placeholder='No. of people' onChange={(e) =>setNumber(e.target.value)} required />
                            <div className="children">
                                <label htmlFor="childrens">Children </label>
                                <input type="radio" name="childrenYes" value="Yes" onChange={(e) =>setChildrenyes(e.target.value)} id="no" />
                                <label htmlFor="yes">Yes</label>
                                <input type="radio" name="childrenNo" value="No"  onChange={(e) =>setChildrenno(e.target.value)}id="no" />
                                <label htmlFor="no">No</label>
                            </div>
                        </div>
                        <div className="more-input-flex">
                            <label htmlFor="departuretime">Departure Time</label>
                            <input type="time" name="dtime" id="dtime" onChange={(e) =>setDtime(e.target.value)} placeholder='Departure Time' required />
                            <label htmlFor="returntime">Return Time</label>
                            <input type="time" name="rtime" id="rtime" onChange={(e) =>setRtime(e.target.value)} placeholder='Return time' required />
                        </div>
                    </div>
                    <div className="submit_reset-Btn">
                        <button type='submit'>Book Now</button>
                        <button type='reset'>Reset Book</button>
                    </div>
                </form>
                
            </div>
        </div>
      </div>
      {/* Why Choose Us */}
      <div className='WhyChooseUs' data-aos="zoom-in">
        <div className="heading">
            <h3>Why Choose Us <span className='firstrow'></span> <span className='secondrow'></span></h3>
        </div>
        <div className="WhyChooseUscontent">
            {whychooseus.map((choosecontents, index)=>
            (
                <div key={index} className="choosecontents">
                    <div className="image">
                        <img src={choosecontents.img} alt=""/>
                    </div>
                    <div className="title">
                        <h3>{choosecontents.title}</h3>
                    </div>
                    <div className="description">
                        <p>{choosecontents.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
      {/* <div className="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7243.219473899108!2d93.93294450645294!3d24.80881362337897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374927abba7f4ddd%3A0xb07673c3fdf9fc40!2sKangla%2C%20Imphal%2C%20Manipur%20795001!5e0!3m2!1sen!2sin!4v1710600064341!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}
    </div>
  )
}

export default Main