import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
import './Navbar.css'
import Images from '../../../images/Images'
import axios from "axios";
import { MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Typography } from "antd";

function Navbar() {

const [feeds, setFeeds] = useState([])
const [feedsOpen, setFeedsOpen] = useState(false);

//fetching for feedback
useEffect(() => {
  axios.get('http://localhost:3003/admin/feedback')
  .then(result => setFeeds(result.data))
  .catch(err => console.log(err))
}, [])

  return (
    <div className='nav'>
      <div className="top_navbar">
        <div className="logo">
            <Link to="/"><img src={Images.Logo} alt="" /></Link>
        </div>
       
        <Typography.Title style={{color:'var(--normal-font-color)', marginTop:"10px"}}>Admin Dashboard</Typography.Title>

      <Space>
        <Badge count={feeds.length} dot style={{marginRight:40}}>
          <MailOutlined
            style={{ fontSize: 24, marginRight:40}}

            onClick={() => {
              setFeedsOpen(true);
            }}
          />
        </Badge>
      </Space>

      <Drawer
        title="Feedbacks"
        open={feedsOpen}
        onClose={() => {
          setFeedsOpen(false);
        }}
        maskClosable>

        <List>
          {
            feeds.map((feed) => {
              return <List.Item>{feed.feedbackemail}    :  {feed.feedback}</List.Item>;
            })
          }
        </List>

      </Drawer>



    </div>



    </div>
  )
}

export default Navbar