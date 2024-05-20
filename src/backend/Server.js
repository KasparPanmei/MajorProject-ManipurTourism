const express = require("express");
const cors = require("cors");

const mongoose = require('mongoose')

const HomeBooking = require("../backend/models/HomePageBooking.js");

const FooterBooking = require("../backend/models/FeedBack.js")

const TravelAndGuide = require("../backend/models/TravelGuide.js");

const HotelAuroraBoutiqueBooking = require("../backend/models/AuroraBoutique.js");

const HotelBookingForm = require("../backend/models/HotelBooking.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/TourismBookingForms');

app.post('/HomePageform',(req, res) =>
{
    HomeBooking.create(req.body)
    .then(homebookingcontacts =>res.json(homebookingcontacts)).catch(err => res.json(err))
    
});

app.post('/FooterForm',(req,res) =>
{
    FooterBooking.create(req.body)
    .then(feedbackbooking =>res.json(feedbackbooking)).catch(err => res.json(err))
})

app.post('/TravelAndGuide/TravelGuideForm',(req,res) =>
{
    TravelAndGuide.create(req.body)
    .then(travelguidebooking =>res.json(travelguidebooking)).catch(err => res.json(err))
})

app.post('/HotelReservation/AuroraBoutiqueBook',(req,res) =>
{
    HotelAuroraBoutiqueBooking.create(req.body)
    .then(hotelaurorabooking =>res.json(hotelaurorabooking)).catch(err => res.json(err))
})

app.post('/HotelReservationBooking',(req,res) =>
{
    HotelBookingForm.create(req.body)
    .then(hotelreservation =>res.json(hotelreservation)).catch(err => res.json(err))
})


app.listen(3003, ()=>
{
    console.log("Server is Running  on Port 3003")
})