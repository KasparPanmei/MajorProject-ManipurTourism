import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Main.css'
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

  return (
    <div className='AdminSideMain-Page'>
      <h2 style={{color:'var(--aside-bg-color)', fontSize:'18px'}}>Customer's Page</h2>
      <div className="explorebyinterest">

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
                    <td>{user.email}</td>
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
                     <Link to={`/ViewMoreDetails/${user._id}`} target='_blank' style={{color:'black', padding:'5px' , border:'none', }}className='btn'> click me</Link>
                   </tr>
                  })
                }
                </div>
              </div>
            </table> 


      </div>
    </div>
  )
}

export default Main










// import { Space, Table, Typography } from 'antd'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import {Link} from 'react-router-dom'

// function Main() {
//   const [tours, setTours] = useState([])

//   useEffect(() => {
//    getData()
//   }, []);

//   const getData = async () => {
//     await axios.get('http://localhost:3003/admin/').then
//     (
//       res => {
//         setTours(
//           res.data.map(row => ({
//             Name: row.name,
//             Email: row.email,
//             Phone:row.phone,
//             From: row.from, 
//             More: row._id      
//           }))
//         );
       
//       }
//     )
    
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "Name",
//       width: 150
//     },
//     {
//       title: "Email",
//       dataIndex: "Email",
//       width: 150
//     },
//     {
//       title: "Phone",
//       dataIndex: "Phone",
//       width: 150
//     },
//     {
//       title: "Address",
//       dataIndex: "From",
//       width: 150
//     },
//     {
//       title: "More",
//       dataIndex: "More",
//       width: 150,
//       render: (row) => <Link to={`/View/${row._id}`} >View More</Link>
//     },
    

//   ];

//   return (
   
//  <Space size={30} direction="vertical">
//   <Typography.Title level={4}>Tours Booked</Typography.Title>
//     {
//       (
        
//         <Table
//          columns={columns}
//          dataSource={tours}
//          pagination={{
//           pageSize: 5,
//         }} 
//          />
//       )
//     }

//   </Space> 
//   );
// }

// export default Main
