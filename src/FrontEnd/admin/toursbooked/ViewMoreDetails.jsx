import React, {useState, useEffect, useRef} from 'react'
import { useParams} from 'react-router-dom'
import './Main.css'
import './ViewMoreDetails.css'
import Images from '../../../images/Images'
import { useReactToPrint } from 'react-to-print'
// import {Link} from 'react-router-dom'
import axios from "axios";

function ViewMoreDetails() {

    const {id} = useParams()
    const[from, setFrom] = useState()
    const[destination, setDestination] = useState()
    const[name, setName] = useState()
    const[phone, setPhone] = useState()
    const[email, setEmail] = useState()
    const[date, setDate] = useState()
    const[dtime, setDtime] = useState()
    const[rtime, setRtime] = useState()

  //fetching for toursbooked
    useEffect(() => {
        axios.get('http://localhost:3003/admin/getUserDetails/'+id)
        .then(result => {console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setPhone(result.data.phone)
        setDestination(result.data.destination)
        setFrom(result.data.from)
        setDate(result.data.date)
        setDtime(result.data.dtime)
        setRtime(result.data.rtime)})
        .catch(err => console.log(err))
        // eslint-disable-next-line
        },[]);
        
        const PrintRef = useRef();

        const handlePrint = useReactToPrint(
          {
            content:() => PrintRef.current
          }
        )
  return (
    <div className="allcontents">
      <div className='AdminSideViewMoreDetails-Page' ref={PrintRef}>
      <div id="printData" >
      <div className="logo">
        <img src={Images.Logo} alt="" />
      </div>
      <div className="content">
        <h3 style={{color:"var(--normal-font-color)"}}>***********Booked Details***********</h3>
      </div>
            <table className="tables">
              <div className="column">
                <h3>Name</h3>
                <div className="dynamicData">
                    <input type="text" name="name" id="" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
              </div>
              <div className="column">
                <h3>Email</h3>
                <div className="dynamicData">
                <input type="text" name="email" id="" value={email} />
                </div>
              </div>
              <div className="column">
                <h3>Phone Number</h3>
                <div className="dynamicData">
                <input type="text" name="phone" id="" value={phone} />
                </div>
              </div>
              <div className="column">
                <h3>From</h3>
                <div className="dynamicData">
                <input type="text" name="from" id="" value={from} />
                </div>
              </div>
              <div className="column">
                <h3>Destination</h3>
                <div className="dynamicData">
                <input type="text" name="destination" id="" value={destination} />
                </div>
              </div>
              <div className="column">
                <h3>Date</h3>
                <div className="dynamicData">
                <input type="text" name="date" id="" value={date} />
                </div>
              </div>
              <div className="column">
                <h3>Depature Time</h3>
                <div className="dynamicData">
                <input type="text" name="dtime" id="" value={dtime} />
                </div>
              </div>
              <div className="column">
                <h3>Return Time</h3>
                <div className="dynamicData">
                <input type="text" name="rtime" id="" value={rtime} />
                </div>
              </div>
             
            </table> 
      </div>
    </div>
    
<button type='button' onClick={handlePrint} style={{marginBottom:'20px'}} className='btn'>Print Data</button>
    </div>

  )
}

export default ViewMoreDetails
