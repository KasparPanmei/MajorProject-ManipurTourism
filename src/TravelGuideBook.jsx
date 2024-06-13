
import React from 'react'
import { Box, Stack, ChakraProvider } from "@chakra-ui/react"
import Card from '../src/razorpaytutorial/frontend/src/Card.jsx'
import Images from './images/Images.jsx'
import axios from "axios";
import Navbar from './FrontEnd/homepage/Navbar.jsx';
import Aside from './FrontEnd/homepage/Aside.jsx';
import Footer from './FrontEnd/homepage/Footer.jsx';
function TravelGuideBook() {
  
  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

    const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount
    })

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Vista Ventures",
        description: "Tutorial of RazorPay",
        image: Images.TravelGuidehero,
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name: "Kaspar Panmei",
            email: "kasparpanmeibboy@gmail.com",
            contact: "7982239573"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const rz1 = new window.Razorpay(options);
    rz1.open();
  }
  return (
    
    <div style={{background:"#e8fee8", height:"100vh",}}>
      <div className='TravelGuide'>
        <div className="gridContainer">
          <nav className='navbar'><Navbar /></nav>
          <aside className='Aside'><Aside  /></aside>
          <main className='main'>
          <div className="Greetings-content">
          <h3 style={{textAlign:"center", color:"black", marginBottom:"10px"
          }}><span>Book</span> Your Guide NOW!</h3>
        </div>
        <ChakraProvider>
        <Box>
          <Stack alignItems="center" justifyContent="center"  direction={["column", "row"]}>
              
              <Card  amount={1200} img={Images.guideportfolio} checkoutHandler={checkoutHandler} />
          </Stack>
        </Box>
        </ChakraProvider>
            <div className="GuideDetails" style={{lineHeight:'30px', textAlign:'justify', margin:'20px'}}>
              <h2 style={{color:"var(--aside-bg-color)", textAlign:'left', fontSize:"larger"}}>Discover Manipur with Kaspar Pamei – Your Expert Tour Guide!</h2>
              <p>Welcome, adventurers! I’m Kaspar Panmei, your passionate and knowledgeable tour guide, dedicated to turning every journey into an unforgettable experience. With years of experience in guiding travelers through some of the most breathtaking and culturally rich destinations, I bring a unique blend of expertise, enthusiasm, and a personal touch to every tour.
              </p>
              <h2 style={{color:"var(--aside-bg-color)", textAlign:'left', fontSize:"larger"}}>Why Choose Me?</h2>
              <p> <h2 style={{color:"var(--aside-bg-color)", textAlign:'left', fontSize:"large"}}> 🎒 Personalized Experiences:</h2> Every traveler is unique, and so are my tours. I tailor each experience to your interests, whether you’re an adventure seeker, history buff, foodie, or cultural enthusiast. Your preferences shape the journey we take together.</p>

              <p> <h2 style={{color:"var(--aside-bg-color)", textAlign:'left', fontSize:"large"}}>🌍 Local Expertise:</h2> I have an in-depth knowledge of the destinations I guide, from hidden gems to iconic landmarks. Whether it’s the bustling streets of a vibrant city, the tranquil beauty of nature, or the rich history and traditions of local communities, I ensure you experience it all authentically.</p>

              <p> <h2 style={{color:"var(--aside-bg-color)", textAlign:'left', fontSize:"large"}}>📚 Engaging Storytelling:</h2> I don’t just show you places; I bring them to life with captivating stories, fascinating facts, and local legends. My engaging storytelling ensures that you not only see but also feel the essence of every destination.</p>

              <p> <h2 style={{color:"var(--aside-bg-color)", textAlign:'left', fontSize:"large"}}> 🤝 Warm and Friendly:</h2> Your comfort and enjoyment are my top priorities. I’m approachable, friendly, and always ready to assist with any needs or questions. I strive to create a welcoming atmosphere where you feel like you’re exploring with a friend.</p>

              <p><h2 style={{color:"var(--aside-bg-color)", textAlign:'left', fontSize:"large"}}> ✨ Memorable Moments: </h2>From stunning sunsets and culinary delights to historical insights and cultural interactions, I curate experiences that leave lasting memories. Let’s create stories you’ll cherish forever.</p>

              <h2 style={{color:"var(--aside-bg-color)", textAlign:'left', fontSize:"larger"}}>Tours Offered:</h2>
              <ul><li><h2 style={{color:"var(--aside-bg-color)", fontWeight:'bolder'}}>City Highlights</h2></li><p style={{textIndent:"20px"}}>Explore the heart of vibrant cities with guided tours to iconic landmarks, bustling markets, and hidden treasures.</p></ul>

              <ul><li><h2 style={{color:"var(--aside-bg-color)", fontWeight:'bolder'}}>Nature and Adventure:</h2></li><p style={{textIndent:"20px"}}>Embark on thrilling adventures in nature, from hiking scenic trails to discovering breathtaking landscapes.</p></ul>

              <ul><li><h2 style={{color:"var(--aside-bg-color)", fontWeight:'bolder'}}>Cultural Immersion:</h2></li><p style={{textIndent:"20px"}}> Dive into local traditions, visit historic sites, and experience the authentic culture of the region.</p></ul>

              <ul><li><h2 style={{color:"var(--aside-bg-color)", fontWeight:'bolder'}}>Gastronomic Journeys: </h2></li><p style={{textIndent:"20px"}}>Savor the flavors of the world with food tours that take you to the best local eateries and culinary hotspots.</p></ul>

              <p>
              Join me on a journey where every moment is a discovery, every sight is a story, and every experience is uniquely yours. Let’s make your next adventure extraordinary!Book Your Tour Today!
              </p>
              <p>
              Contact me at <a rel='noopener noreferrer' style={{textDecoration:"none"}} href="tel:7982239573">+91-7982239573</a> to start planning your unforgettable journey. Follow me on [@manipurtourism2024] for a glimpse into the adventures that await.
              </p>
            </div>
        </main>
      </div>
      <footer className='footer'><Footer /></footer>
    </div>
    </div>
  )
}

export default TravelGuideBook