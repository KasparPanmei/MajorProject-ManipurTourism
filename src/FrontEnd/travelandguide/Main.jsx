import React, {useEffect} from 'react'
import Images from '../../images/Images'

import './Main.css'
import '../../HomePage.css';
import AOS from 'aos';
import 'aos/dist/aos';
function Main() {

  const Guides = [
    {
      img: Images.guideportfolio,
      name: "Kaspar Panmei",
      pricerate: "₹ 1200 /hr",
      motto: "A zeal to meet new people and show around my state",
      
    },
    {
      img: Images.guideportfolio,
      name: "Kaspar Panmei",
      pricerate: "₹ 1200 /hr",
      motto: "A zeal to meet new people and show around my state",
      
    },
    {
      img: Images.guideportfolio,
      name: "Kaspar Panmei",
      pricerate: "₹ 1200 /hr",
      motto: "A zeal to meet new people and show around my state",
      
    },
    {
      img: Images.guideportfolio,
      name: "Kaspar Panmei",
      pricerate: "₹ 1200 /hr",
      motto: "A zeal to meet new people and show around my state",
      
    }
  ]

  const whychooseourguide = [
    {
      title:"Local Expertise",
      desc:"Our guides are locals who breathe life into the places they guide you through.",
    },
    {
      title:"Tailored Experiences",
      desc:"From solo adventurers to group explorations, we tailor each experience to your interests, ensuring a personalized journey that resonates with you.",
    },
    {
      title:"Seamless Navigation",
      desc:"Forget the stress of navigating unknown territories. Our guides are your reliable companions, seamlessly leading you through bustling markets, historical landmarks, and off-the-beaten-path wonders with confidence.",
    },
    {
      title:"Cultural Immersion",
      desc:"Immerse yourself in the heart of local cultures. Our guides facilitate meaningful interactions, language insights, and introductions to traditions, providing a genuine connection to the places you visit.",
    },
    {
      title:"Insider Access",
      desc:"Gain exclusive access to hidden spots and local favorites that only seasoned guides can reveal. Experience destinations like a true insider, away from the typical tourist routes.",
    },
    {
      title:"Safety Assurance",
      desc:"Your safety and comfort are our top priorities. Our guides are trained to handle diverse situations, ensuring you can focus on enjoying the journey while we take care of the details.",
    }
  ]

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div className="container" >
      <div className="hero-container" data-aos="zoom-in">
          <img src={Images.TravelGuidehero} alt="herocontainer" className="hero-image" />
        <div className="Greetings-content">
          <p>We redefine travel experiences by offering more than just a tour; we provide the keys to unlocking the heart and soul of your destination. Our seasoned guides are passionate storytellers, cultural ambassadors, and navigators of the extraordinary, ensuring that your journey becomes an immersive and unforgettable adventure.</p>
          <br />
          <p>Uncover the stories, sights, and flavors of your chosen destination with the guidance of passionate experts. we don't just show you around; we invite you to be part of a story that lasts a lifetime.</p>
        </div>
      </div>
      <div className="heading" data-aos="zoom-in">
                <h3>Meet our Guides <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      <div className="guides-photographer-content" data-aos="zoom-in">
        <div className="guides_photographerbtn">
          <h3>Guides</h3>
          <h3>Photographer</h3>
        </div>
        <div className="portfolio">
          {Guides.map((portfoliocontent, index) =>
          (
            <div key={index}className="portfoliocontent">
              <div className="image">
                <img src={portfoliocontent.img} alt="guideportfolioi" />
              </div>
              <div className="second-content">
                <div className="top-content">
                  <h2>{portfoliocontent.name}</h2>
                  <h2 id='price'>{portfoliocontent.pricerate}</h2>
                </div>
                <div className="motto">
                  <p>{portfoliocontent.motto}</p>
                </div>
                <div className="rating">
                  <h3>Rating {portfoliocontent.rating}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className='view-more-btn'>View More</button>
      <div className="findGuide" data-aos="zoom-in">
        <div className="heading">
                <h3>Find Guide for You<span className='firstrow'></span> <span className='secondrow'></span></h3>
        </div>
        <div className="form">
          <form action="">
            <div className="first-inputform">
              <input required type="text" name="" id="" placeholder='Your Name'/>
              <input required type="email" name="" id="" placeholder='Email/ Phone no.'/>
            </div>
            <div className="second-inputform">
              <input required type="text" name="" id="" placeholder='Where to...'/>
              <input required type="text" name="" id="" placeholder='No. of people'/>
            </div>
            <label htmlFor="optional">Optional</label>
            <div className="optionalinput">
              <select name="" id="">
                <option value="">Service Offered</option>
                <option value="">Airport/Pier Meet & Greet</option>
                <option value="">Tour Consultant</option>
                <option value="">Tour Escort</option>
                <option value="">Tour Guide</option>
                <option value="">Tour Manager</option>
                <option value="">Lectures</option>
              </select>
              <select name="" id="">
                <option value="">Tour Types</option>
                <option value="">Virtual & Online Tour</option>
                <option value="">Manipur History</option>
                <option value="">Architectural Tour</option>
                <option value="">Bicycle Tour</option>
                <option value="">Parks</option>
                <option value="">Village</option>
                <option value="">Hansom Cab Tour</option>
                <option value="">Helicopter Tour</option>
                <option value="">Movies & TV Tour</option>
                <option value="">Music</option>
                <option value="">Taxi Tour</option>
                <option value="">Student Tour</option>
                <option value="">Sport Related Tour</option>
                <option value="">Private Tour</option>
              </select>
            </div>
            <button className='findguide-btn'>Find Guide</button>
            <p>A local travel expert will also be available to plan your personal trip for free of charge.</p>
          </form>
        </div>
      </div>
      <div className="guide-services">
        <div className="heading">
                  <h3>Why Choose our Guide Services<span className='firstrow'></span> <span className='secondrow'></span></h3>
          </div>
          <div className="WhyChooseOurGuideContent" data-aos="zoom-in">
      
            {whychooseourguide.map((whyourguide, index) =>
            (
              <div key={index} className="whyourguide">
                <div className="title">
                  <h3>{whyourguide.title}</h3>
                  <p>{whyourguide.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      
    </div>
  )
}

export default Main