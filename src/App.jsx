import React from 'react';
import './App.css';
import HomePage from './HomePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TravelGuide from './TravelGuide.jsx';
import HotelReservation from './HotelReservation.jsx';
import TaxiFlight from './TaxiFlight.jsx';
import ParkGarden from './ParkGarden.jsx';
import Camping from './Camping.jsx';
import RentVehicle from './RentVehicle.jsx';
import Cultural from './Cultural.jsx';
import About from './About.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/TravelGuide' element={<TravelGuide />} />
          <Route path='/RentVehicle' element={<RentVehicle />} />
          <Route path='/HotelReservation' element={<HotelReservation />} />
          <Route path='/TaxiFlight' element={<TaxiFlight />} />
          <Route path='/ParkGarden' element={<ParkGarden />} />
          <Route path='/Camping' element={<Camping />} />
          <Route path='/Cultural' element={<Cultural />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
