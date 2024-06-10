import React, {useState, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos'
import {Link} from 'react-router-dom'
import Images from '../../images/Images'
import './Main.css'
// import {Link} from 'react-router-dom'
import axios from "axios";


function Main() {
//for tours booked
  const [users, setUsers] = useState([])

  //fetching for toursbooked
  useEffect(() => {
    axios.get('http://localhost:3003/admin')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
}, [])

//for feedbacks
const [feeds, setFeeds] = useState([])

//fetching for feedback
useEffect(() => {
  axios.get('http://localhost:3003/admin/feedback')
  .then(result => setFeeds(result.data))
  .catch(err => console.log(err))
}, [])



  const [toggleState, setToggleState] = useState(1);

  const toggletab =(index) =>
    {
      setToggleState(index);
    }
    useEffect(()=>
      {
        AOS.init({duration:1000});
      },[]); 
  return (
    <div className='AdminSideMain-Page'>
      <div className="explorebyinterest" data-aos='zoom-in'>

        <div className="block-tabs">
          <div className={toggleState === 1? "tabs active-tabs": "tabs"} onClick={() => toggletab(1)}>
            <button class='ta' id='Admin-Btn'>TOURS BOOKED</button>
          </div>
          <div className={toggleState === 2? "tabs active-tabs": "tabs"} 
          onClick={() => toggletab(2)}>
            <button class='ta'  id='Admin-Btn'>HOTELS BOOKED</button>
          </div>
          <div className={toggleState === 3? "tabs active-tabs": "tabs"}
           onClick={() => toggletab(3)}>
            <button class='ta'  id='Admin-Btn'>FEEDBACKS</button>
          </div>
        </div>

        <div className="tabs-contents" data-aos='zoom-in'>

          <div className={toggleState ===1? "active-content" : "block-contents "}>
           <div className="images">
            <table className="tables">
              <div className="column">
                <h3>Name</h3>
                <div className="dynamicData">
                {
                  users.map((user) => {
                   return<tr>
                    <td>{user.name}</td>
                   </tr>
                  })
                }
                </div>
              </div>
              <div className="column">
                <h3>Email</h3>
                <div className="dynamicData">
                {
                  users.map((user) => {
                   return<tr>
                    <td>{user.name}</td>
                   </tr>
                  })
                }
                </div>
              </div>
              <div className="column">
                <h3>Phone Number</h3>
                <div className="dynamicData">
                {
                  users.map((user) => {
                   return<tr>
                    <td>{user.phone}</td>
                   </tr>
                  })
                }
                </div>
              </div>
              <div className="column">
                <h3>View More</h3>
                <div className="dynamicData">
                {
                  users.map((user) => {
                   return<tr>
                     <Link to={`/ViewMoreDetails/${user._id}`} target='_blank' style={{textDecoration:'none', color:'white'}}className='btn'>View More</Link>
                   </tr>
                  })
                }
                </div>
              </div>
            </table> 
           </div>
          </div>


          <div className={toggleState ===2? "active-content" : "block-contents "}>
           <div className="images">
            <div className="image">
              <img src={Images.bishnupurlakeswaterfall} alt="" />
            </div>
            <div className="image">
              <img src={Images.churchandpurlakeswaterfall} alt="" />
            </div>
            <div className="image">
              <img src={Images.ukhrullakeswaterfall} alt="" />
            </div>
            <div className="image">
              <img src={Images.tmllakeswaterfall} alt="" />
            </div>
           </div>
          </div>


          <div className={toggleState ===3? "active-content" : "block-contents "}>
           <div className="images">
           <table className="">
              <thread>
                <tr>
                  <th>Feedbacks</th>
                  <th>Email</th>
                </tr>
              </thread>
              <tbody>
                {
                  feeds.map((feed) => {
                   return<tr>
                    <td>{feed.feedback}</td>
                    <td>{feed.feedbakemail}</td>
                    
                   </tr>
                  })
                }
              </tbody>
              
            </table> 
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
