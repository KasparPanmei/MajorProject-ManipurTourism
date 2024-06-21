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
    await axios.get('http://localhost:3003/guides/').then
    (
      res => {
        setloading(false);
        setTours(
          res.data.map(row => ({
            Name: row.yourname,
            Email: row.emailorphoneno,
            Service:row.service,
            TourTypes: row.tour,
            id: row.id
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
      title: "Email or Phone",
      dataIndex: "Email",
      width: 150
    },
    {
      title: "Service",
      dataIndex: "Service",
      width: 150
    },
    {
      title: "Tour Types",
      dataIndex: "TourTypes",
      width: 150
    },
    

  ];

  return (
   
 <Space size={30} direction="vertical">
  <Typography.Title level={4}>Travel and Guides</Typography.Title>
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