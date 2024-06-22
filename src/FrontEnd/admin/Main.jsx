import { Card, Space, Statistic, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { BookOutlined, DollarCircleOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import axios from 'axios'





function Main() {
  const [tours, setTours] = useState(0);
  const [customers, setCustomers] = useState(0);
  // const [guides, setGuides] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const response = await axios.get('http://localhost:3003/admin/count');
      setTours(response.data.tours)
      setCustomers(response.data.customers)
    };

    fetchCount();
    // axios.get('http://localhost:3003/admin')
    // .then((res) => {
    //   setTours(res.total)
    //   setCustomers(res.total)
    // });

    // axios.get('http://localhost:3003/guides')
    // .then((res) => {
    //   setGuides(res.total)
    // });
  }, []);

  return (
    <Space size={30} direction="vertical">

       <Typography.Title level={4}>Dashboard</Typography.Title>

       <Space direction='horizontal'>
        <DashboardCard 
        icon = {<BookOutlined 
          style={{
            color:"green", 
            backgroundColor:'rgba(0, 255, 0, 0.25)', 
            borderRadius: 20,
            fontSize: 24,
            padding: 8,
          
          }} 
          />
          } 
          title={"Tours Booked"} 
          value={tours} 
        />

        <DashboardCard 
        icon = {<UserOutlined
          style={{
            color:"red", 
            backgroundColor:'rgba(255,0, 0, 0.25)', 
            borderRadius: 20,
            fontSize: 24,
            padding: 8,
          
          }} 
        />
        } 
        title={"Customers"} 
        value={customers} 
        />

        <DashboardCard 
        icon = {<TeamOutlined
          style={{
            color:"purple", 
            backgroundColor:'rgba(0, 255, 255, 0.25)', 
            borderRadius: 20,
            fontSize: 24,
            padding: 8,
          
          }} 
        />
        } 
        title={"Guides Hired"} 
        value={100} 
        />

        <DashboardCard 
        icon = {<DollarCircleOutlined
          style={{
            color:"blue", 
            backgroundColor:'rgba(0, 0, 255, 0.25)', 
            borderRadius: 20,
            fontSize: 24,
            padding: 8,
          
          }} 
        />
       } 
        title={"Revenue"} 
        value={100} 
        />
       </Space>
       <Space>
        <RecentBooks />
      </Space>
    </Space>
  );
}

function DashboardCard({title, value, icon}){
  return(
    <Card>
      <Space direction='horizontal'>
        {icon}
        <Statistic title={title} value={value}/>
      </Space>  
    </Card>

  );
}

function RecentBooks(){

  const [tours, setTours] = useState([])
  const [loading, setloading] = useState(true);

  useEffect(() => {
   getData()
  }, []);

  const getData = async () => {
    await axios.get('http://localhost:3003/admin').then
    (
      res => {
        setloading(false);
        setTours(
          res.data.splice(0,5).map(row => ({
            Name: row.name,
            Email: row.email,
            From: row.from,
            Destination: row.destination,
            createdAt: row.createdAt         
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
      title: "From",
      dataIndex: "From",
      width: 150
    },
    {
      title: "Destination",
      dataIndex: "Destination",
      width: 150
    },
    {
      title: "Book At",
      dataIndex: "createdAt",
      width: 150
    }
  ];

  return (
   <div>
    <Typography.Title level={4}  style={{background: "rgba(0,255,0,0.25)", color: "Green"}}>Recent Books</Typography.Title>
    {
      loading? (
        "Loading"
      ) : (
        
        <Table 
         columns={columns}
         dataSource={tours}
         pagination={false}
         loading={loading}       
/>
      )
    }
   </div>
  );
}

export default Main

