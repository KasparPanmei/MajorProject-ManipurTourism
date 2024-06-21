import { Space, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Main() {
  const [tours, setTours] = useState([])
  const [loading, setloading] = useState(true);

  useEffect(() => {
   getData()
  }, []);

  const getData = async () => {
    await axios.get('http://localhost:3003/hotel/').then
    (
      res => {
        setloading(false);
        setTours(
          res.data.map(row => ({
            Name: row.entername,
            Email:row.enterphoneoremail,
            Checkin:row.entercheckindate, 
            Checkout:row.entercheckoutdate,
            Room:row.enternoofrooms, 
            People:row.enternoofpeople,
            RoomType:row.roomtype          
          }))
        );
       
      }
    )
    
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      width: 150
    },
    {
      title: "Email",
      dataIndex: "Email",
      width: 150
    },
    {
      title: "Check-in-Date",
      dataIndex: "Checkin",
      width: 150
    },
    {
      title: "Check-out-Date",
      dataIndex: "Checkout",
      width: 150
    },
    {
      title: "No. of People",
      dataIndex: "People",
      width: 150
    }, {
      title: "No. of Rooms",
      dataIndex: "Room",
      width: 150
    },
    {
      title: "Room Type",
      dataIndex: "RoomType",
      width: 150
    },
    
    

  ];

  return (
   
 <Space size={30} direction="vertical">
  <Typography.Title level={4}>Hotels Booked</Typography.Title>
      {
      loading? (
        "Loading"
      ) : (
        
        <Table
         columns={columns}
         dataSource={tours}
         pagination={{
          pageSize: 5,
        }} 
         loading={loading}
         
        />
      )
    }

  </Space> 
  );
}

export default Main