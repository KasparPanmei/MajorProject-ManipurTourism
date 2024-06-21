import React from 'react'
import './Aside.css'
import { Link } from 'react-router-dom';
function Aside() {

  return (
    <div className='aside'>
      <div className="nav-links">
      <nav>
                    <ul>
                    <Link to="/Admin" className={"list-style"}>DashBoard</Link>
                        <Link to="/Customers" className={"list-style"} >Customers</Link>
                        <Link to="/ToursBooked" className={"list-style"}>Tours Booked</Link>
                        <Link to="/TourGuidesHired" className={"list-style"} >Travel and Guides</Link>
                        <Link to="/HotelsBooked" className={"list-style"} >Hotels Booked</Link>
                    </ul>
                </nav>
      </div>
      
    </div>
  )
}

export default Aside;


// import React from 'react'
// import './Aside.css'
// // import { Link } from 'react-router-dom';

// import { Menu } from "antd";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";


// function Aside() {

//   const location = useLocation();
//   const [selectedKeys, setSelectedKeys] = useState("/");

//   useEffect(() => {
//     const pathName = location.pathname;
//     setSelectedKeys(pathName);
//   }, [location.pathname]);
  
//   const navigate = useNavigate();


//   return (
//     <div className='aside-admin'>
//       <div className="nav-links">
//       <Menu
//         className="SideMenuVertical"
//         mode="vertical"
//         onClick={(item) => {
//           //item.key
//           navigate(item.key);
//         }}
//         selectedKeys={[selectedKeys]}
//         items={[
//           {
//             label: "DashBoard",
//             // icon: <AppstoreOutlined />,
//             key: "/Admin",
//           },
//           {
//             label: "Tours Booked",
//             // icon: <AppstoreOutlined />,
//             key: "/ToursBooked",
//           },
//           {
//             label: "Guides Hired",
//             key: "/TourGuidesHired",
//             // icon: <ShopOutlined />,
//           },
//           {
//             label: "Hotels Booked",
//             key: "/HotelsBooked",
//             // icon: <ShoppingCartOutlined />,
//           },
//           {
//             label: "Customers",
//             key: "/Customers",
//             // icon: <UserOutlined />,
//           },
//         ]}
//       ></Menu>
//       </div>
      
//     </div>
//   )
// }

// export default Aside;