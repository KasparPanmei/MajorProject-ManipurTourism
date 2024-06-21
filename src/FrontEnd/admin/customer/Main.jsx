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
    await axios.get('http://localhost:3003/admin/').then
    (
      res => {
        setloading(false);
        setTours(
          res.data.map(row => ({
            Name: row.name,
            Email: row.email,
            Phone:row.phone,
            From: row.from,
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
      title: "Email",
      dataIndex: "Email",
      width: 150
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      width: 150
    },
    {
      title: "Address",
      dataIndex: "From",
      width: 150
    },
    

  ];

  return (
   
 <Space size={30} direction="vertical">
  <Typography.Title level={4}>Customers</Typography.Title>
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
