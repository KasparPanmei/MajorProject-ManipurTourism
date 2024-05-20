import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import Images from '../../images/Images'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './Main.css'

function Main() {
  useEffect(()=>
    {
      AOS.init({duration:1000});
    },[]); 

  const available = [
    {
      name:"Lake"
    },
    {
      name:"Nature"
    },
    {
      name:"Boating"
    },
    {
      name:"Site Seeing"
    },
    {
      name:"Wildlife"
    },
    {
      name:"Adventure"
    },
  ]
  return (
    <div className="loktak" data-aos="zoom-in">
      <div className="address">
        <Link to='https://maps.app.goo.gl/ZChkq72xD6kexLqi6' target='_blank' className='flex-location'>
          <img src={Images.location} alt="" />
          <p>RW4V+X4M, Kangla, Imphal, Manipur 795001</p>
        </Link>

      </div>
      <div className="heading">
        <h1>Loktak Lake</h1>
      </div>
      <div className="loktak-lake-content">
        <div className="first-content">
          <img src={Images.loktakfirstimg} alt="" />
          <div className="more-image-of-loktak">
            <div className="image">
              <img src={Images.loktakfirstimg} alt="" />
            </div>
            <div className="image">
              <img src={Images.loktakfirstimg} alt="" />
            </div>
            <div className="image">
              <img src={Images.loktakfirstimg} alt="" />
            </div>
            <div className="image">
              <img src={Images.loktakfirstimg} alt="" />
            </div>
          </div>
          <div className="availabilityinloktak">
          {available.map((availablebtns, index) =>
          (
            <div className="availablebtns">
              <div className="btn">
                {availablebtns.name}
              </div>
            </div>
          ))}
          <div className="paragraph">
            <p>
              The Loktak Lake is a freshwater lake in Northeast India. It is the largest freshwater lake in South Asia. It is a pulsating lake, with a surface area varying from 250 sq km to 500 sq km during the rainy season with a typical area of 287 sq km. The lake is located at Moirang in Manipur state, India. The name Loktak comes from the Meitei language, meaning "stream's end." It is famous for its circular floating swamps, known as phumdis floating over it, which are a masses of vegetation, soil and organic matter at various stage of decomposition. The largest of all the phumdis covers an area of 40 km2 (15 sq mi) and is situated on the southeastern shore of the lake. Located on this phumdi, Keibul Lamjao National Park is the only floating national park in the world. The park is the last natural refuge of the endangered Sangai (state animal), Manipur brow-antlered deer, one of three subspecies of Eld's deer.
            </p>
            <p>The Loktak Day is observed every year on the 15th of October at the periphery of the Loktak lake.</p>
            <p>This ancient lake plays an important role in the economy of Manipur. It serves as a source of water for hydropower generation, irrigation and drinking water supply. The fishermen's community, living on the edges of the lake and on phumdis, also known as "phumshangs", heavily depends on it for their livelihood, maintaining a unique lifestyle. The lake's biodiversity supports a host of flora and fauna, making it a hotspot for nature enthusiasts and ecologists.</p>
            <p>Human activities have led to severe pressure on the lake ecosystem. Rural and urban hamlets around the lake have a population of about 100,000 people. Recognized for its ecological significance, Loktak Lake was designated a wetland of international importance under the Ramsar Convention in 1990 and listed in the Montreux Record in 1993.</p>
            <div className="heading">
              <h4>Climate</h4>
            </div>
            <p>With an average annual rainfall of 1,183 mm (46.57 in) tropical monsoon climate prevails in the valley.
              Temperatures range from 0 to 35 °C (32 to 95 °F).
              February and March are the driest months.</p>
              <div className="heading">
                <h4>Visitor Information</h4>
              </div>
              <p>Well connected by road and air, Imphal, the capital city of Manipur is 39 km (24 mi) away from the lake, by road. The lake is a unique destination for tourism. The lake offers excellent opportunities for visitors to enjoy the beauty of the lake and its several islands located inside it that are studded with floating phumdis of different geometrical shapes. The important islands which offer facilities for visitors are the Sandra and Phubala.
 
              The Sendra Tourist Home on the island with an attached Cafeteria in the middle of the lake is an ideal tourist spot. Visitors get a bird's eye view of life on the lake—small islands that are actually floating weed on which the lake people live.
               
              Phubala resort, on the Phubala, is 40 km (25 mi) from Imphal.
               
              At Moirang town on the fringe of the Loktak is the Indian National Army (INA) Museum which will be of interest to tourists. The exhibits include letters, photographs, badges of ranks and other articles associated with the INA. A bronze statue of Netaji Subash Chandra Bose in uniform stands in the lawn.
              </p>
          </div>
      </div>
        </div>
        <div className="second-content">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57081.67016992651!2d93.76963980362004!3d24.553510122603708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37493416caa759a7%3A0x9c989130312efe8e!2sLoktak%20Lake!5e1!3m2!1sen!2sin!4v1715359575040!5m2!1sen!2sin" width="400" height="250" title="loktaklake" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          <div className="weather">
            <div className="image">
              <img src={Images.weather} alt="" />
            </div>
          </div>
          <div className="more-detail">
            <h5>Entry Ticket Pricing for Loktak Lake </h5>
            <div className="table">
              <table>
                <tr>
                  <th rowSpan="1">For Local Visitor</th>
                </tr>
                <tr>
                  <td>Adult</td>
                  <td>INR 100</td>
                </tr>
                <tr>
                  <td>Child</td>
                  <td>INR 50</td>
                </tr>
                <tr>
                  <th rowSpan="1">For Outsiders & Foreigners</th>
                </tr>
                <tr>
                  <td>Adult</td>
                  <td>INR 200</td>
                </tr>
                <tr>
                  <td>Child</td>
                  <td>INR 100</td>
                </tr>
              </table>
            </div>
            
          </div>
          <div className="more-detail">
            {/* second table */}
            <h5>Opening and Closing Time of Loktak Lake </h5>
            <div className="table">
              <table>
                <tr>
                  <td>Monday</td>
                  <td>06:00 AM - 05:00 PM</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>06:00 AM - 05:00 PM</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>06:00 AM - 05:00 PM</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>06:00 AM - 05:00 PM</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>06:00 AM - 05:00 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>06:00 AM - 05:00 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>06:00 AM - 05:00 PM</td>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>06:00 AM - 05:00 PM</td>
                </tr>
              </table>
            </div>
          </div>
          {/* tips */}
          <div className="more-detail">
            <h5>Tips when you are visiting to Loktak Lake</h5>
            <ul>
              <li>Carry water and light snacks, but ensure you don't litter the area.</li>
              <li>Use binoculars for a closer look at distant wildlife.</li>
              <li>Wear comfortable shoes suitable for walking.</li>
              <li>Respect the fragile environment and the local community.</li>
            </ul>
          </div>
          {/* best time to visit */}
          <div className="more-detail">
            <h5>Best Time to Visit Loktak Lake</h5>
              <div className="details-on-best-time">
              <p>The best time to visit Loktak Lake is during the post-monsoon and winter months, which stretch from October to March. During this period, the weather is generally cool and pleasant, making it an ideal time for sightseeing and engaging in outdoor activities. The temperate climate ensures that visitors can comfortably explore the lake's unique floating islands, Additionally, the post-monsoon season brings clear skies and a vibrant natural landscape, enhancing the serene beauty of Loktak Lake.</p>
              <p>
              Tourists visiting Loktak Lake can enjoy boat rides, witness indigenous fishing methods, and observe diverse flora and fauna. Additionally, the winter season in Manipur hosts cultural festivals like the Sangai Festival in November, providing a chance to immerse in local culture. However, it's best to avoid the monsoon months (May to September) due to heavy rainfall causing water level rise and activity restrictions.
              </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main