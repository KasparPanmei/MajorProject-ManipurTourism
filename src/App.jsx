import React from 'react';
import './App.css';
import HomePage from './HomePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TravelGuide from './TravelGuide.jsx';
import HotelReservation from './HotelReservation.jsx';
import FlightBooking from './TaxiFlight.jsx';
// import ParkGarden from './ParkGarden.jsx';
// import Camping from './Camping.jsx';
import TaxiAndRentVehicle from './RentVehicle.jsx';
// import Cultural from './Cultural.jsx';
import About from './About.jsx';
import Register from './Register.jsx'
import Login from './Login.jsx'
import ExplorePlaces from './ExplorePlaces.jsx'
import Loktak from './Loktak.jsx';
import HotelDescription from './HotelDescription.jsx';

import Admin from './Admin.jsx'
import Customers from './Customers.jsx'
import HotelsBooked from './HotelsBooked.jsx'
import TourGuidesHired from './TourGuidesHired.jsx'
import ToursBooked from './ToursBooked.jsx'
import ViewMoreDetails from './FrontEnd/admin/toursbooked/ViewMoreDetails.jsx'




import TravelGuideBook from './TravelGuideBook.jsx';
import PaymentSuccess from "./razorpaytutorial/frontend/src/PaymentSuccess.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ExplorePlaces' element={<ExplorePlaces />} />
          <Route path='/TravelGuide' element={<TravelGuide />} />
          <Route path='/TaxiAndRentVehicle' element={<TaxiAndRentVehicle />} />
          <Route path='/HotelReservation' element={<HotelReservation />} />
          <Route path='/FlightBooking' element={<FlightBooking />} />
          {/* <Route path='/ParkGarden' element={<ParkGarden />} />
          <Route path='/Camping' element={<Camping />} />
          <Route path='/Cultural' element={<Cultural />} /> */}
          <Route path='/About' element={<About />} />
          <Route path='/Register' element={<Register/> }/>
          <Route path='/Login' element={<Login/> }/>
          <Route path='/exploreplaces/districts/bishnupur/loktaklake' element={<Loktak /> }/>
          <Route path='/HotelReservation/Aurora-Boutique' element={<HotelDescription />} />

          <Route path='/Admin' element={<Admin />} />
          <Route path='/Customers' element={<Customers/>} />
          <Route path='/HotelsBooked' element={<HotelsBooked/>} />
          <Route path='/TourGuidesHired' element={<TourGuidesHired/>} />
          <Route path='/ToursBooked' element={<ToursBooked/>} />
          <Route path='/ViewMoreDetails/:id' element={<ViewMoreDetails />} />  
          
          <Route path='/TravelGuide/BookGuide' element={<TravelGuideBook />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
