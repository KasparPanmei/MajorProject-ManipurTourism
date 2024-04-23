import React from 'react'
import '../../HomePage.css'
import Images from '../../images/Images'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className="backtotop">
        <a href="/">Back to top</a>
      </div>
      <div className="footercontents">
      <div className="contents">
          <h3>Company</h3>
          <ul>
            <li><a href="https://www.figma.com/file/xW893J9Mj9d3sNW6ylvkO4/Final-Year-Project-UI%2FUX-Design?type=design&node-id=0-1&mode=design&t=SuKSg5t8ort5UiFk-0" rel="noopener noreferrer">About Us</a></li>
            <li><a href="https://www.figma.com/file/xW893J9Mj9d3sNW6ylvkO4/Final-Year-Project-UI%2FUX-Design?type=design&node-id=0-1&mode=design&t=SuKSg5t8ort5UiFk-0" rel="noopener noreferrer">Cookies</a></li>
            <li><a href="https://www.figma.com/file/xW893J9Mj9d3sNW6ylvkO4/Final-Year-Project-UI%2FUX-Design?type=design&node-id=0-1&mode=design&t=SuKSg5t8ort5UiFk-0" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="https://www.figma.com/file/xW893J9Mj9d3sNW6ylvkO4/Final-Year-Project-UI%2FUX-Design?type=design&node-id=0-1&mode=design&t=SuKSg5t8ort5UiFk-0" rel="noopener noreferrer">Booking Terms</a></li>
          </ul>
        </div>
        <div className="contents">
          <h3>Contact</h3>
          <ul>
            <li><a href="https://www.google.com/maps/dir/24.7886312,93.910885/24.7886329,93.9108743/@24.7886394,93.9102061,19z/data=!3m1!4b1!4m6!4m5!1m1!4e1!1m1!4e1!3e0?authuser=0&entry=ttu" rel="noopener noreferrer" target='_blank'>15, Imphal, Manipur</a></li>
            <li><a target="_blank" href="https://wa.me/9233102848" rel="noopener noreferrer">+91-9233102848</a></li>
            <li><a href="mailto:manipurtourism2024@gmail.com" target='_blank' rel='noopener noreferrer'>manipurtourism2024@gmail.com</a></li>
            <div className="social_links">
              <li><a href="https://wa.me/9233102848" target='_blank' rel='noopener noreferrer'><img src={Images.whatsapp} alt="" /></a></li>
              <li><a href="https://twitter.com/home" target='_blank' rel='noopener noreferrer'><img src={Images.twitter} alt="" /></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61557113581445" target='_blank' rel='noopener noreferrer'><img src={Images.facebook} alt="" /></a></li>
              <li><a href="https://www.instagram.com/_manipur_tourism_/" target='_blank' rel='noopener noreferrer'><img src={Images.insta} alt="" /></a></li>
              <li><a href="https://www.linkedin.com/in/manipur-tourism-undefined-85b4312ba/" target='_blank' rel='noopener noreferrer'><img src={Images.linkedIn} alt="" /></a></li>
            </div>
          </ul>
        </div>
        <div className="contents">
        <h3>Pay Online</h3>
          <ul>
          <div className="Payonline">
              <li><a href="https://www.visa.co.in/" rel='noopener noreferrer' target='_blank'><img src={Images.visa} alt="" rel='noopener noreferrer' target='_blank' /></a></li>
              <li><a href="https://www.paypal.com/in/home" rel='noopener noreferrer' target='_blank'><img src={Images.paypal} alt="" rel='noopener noreferrer' target='_blank' /></a></li>
              <li><a href="https://www.mastercard.co.in/en-in.html" rel='noopener noreferrer' target='_blank'><img src={Images.mastercard} alt="" rel='noopener noreferrer' target='_blank' /></a></li>
            </div>
            <div className="Payonline">
              <li><a href="https://brand.mastercard.com/brandcenter-ca/more-about-our-brands.html" rel='noopener noreferrer' target='_blank'><img src={Images.maestro} alt="" rel='noopener noreferrer' target='_blank' /></a></li>
              <li><a href="https://pay.google.com/intl/en_in/about/" rel='noopener noreferrer' target='_blank'><img src={Images.gpay} alt="" rel='noopener noreferrer' target='_blank' /></a></li>
              <li><a href="https://www.apple.com/apple-pay/" rel='noopener noreferrer' target='_blank'><img src={Images.applepay} alt="" rel='noopener noreferrer' target='_blank' /></a></li>
            </div>
          </ul>
        </div>
        <div className="contents">
          <textarea name="feedback" id="" cols="30" rows="5" placeholder='Feedback' required></textarea>
          <form action="">
            <input type="email" name="email" id="email" required placeholder='example@gmail.com'/>
            <button type="submit" onSubmit={()=>alert("Feedback Sent!")}>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer