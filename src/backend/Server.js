const express = require("express");
const cors = require("cors");

const mongoose = require('mongoose')

const HomeBooking = require("../backend/models/HomePageBooking.js");

const FooterBooking = require("../backend/models/FeedBack.js")

const TravelAndGuide = require("../backend/models/TravelGuide.js");

const HotelAuroraBoutiqueBooking = require("../backend/models/AuroraBoutique.js");

const HotelBookingForm = require("../backend/models/HotelBooking.js");

const collection = require("../backend/models/User.js")

const RentalVehicle = require('../backend/models/RentalVehicles.js')

const TravelGuideBookingPayment = require('../backend/models/TravelGuideBookPayment.js')

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://127.0.0.1:27017/TourismBookingForms');

app.post('/HomePageform',(req, res) =>
{
    HomeBooking.create(req.body)
    .then(homebookingcontacts =>res.json(homebookingcontacts))
    .catch(err => res.json(err))
    
})

//fetch and display on the admin page(tours booked)
app.get('/admin', (req, res) => {
    HomeBooking.find({})
    .then(homebookingcontacts =>res.json(homebookingcontacts))
    .catch(err => res.json(err))

});
 //count of tours booked documents
app.get('/admin/count', async (req, res) => {
    const count = await HomeBooking.countDocuments();
    res.json({count});
});

//fetch and display Tourguides booked
app.get('/guides', (req, res) => {
    TravelAndGuide.find({})
    .then(Guidesbooking =>res.json(Guidesbooking))
    .catch(err => res.json(err))

})

//fetch and display Tourguides booked
app.get('/hotel', (req, res) => {
    HotelBookingForm.find({})
    .then(Hotelbooking =>res.json(Hotelbooking))
    .catch(err => res.json(err))

})


app.get('/admin/getUserDetails/:id',(req, res) =>
{
    const id = req.params.id
    HomeBooking.findById({_id:id})
    .then(homebookingcontacts =>res.json(homebookingcontacts))
    .catch(err => res.json(err))
})


app.post('/FooterForm',(req,res) =>
{
    FooterBooking.create(req.body)
    .then(feedbackbooking =>res.json(feedbackbooking))
    .catch(err => res.json(err))
})

//fetch and display on the admin page(feedbacks)
app.get('/admin/feedback', (req, res) => {
    FooterBooking.find({})
    .then(feedbackbooking =>res.json(feedbackbooking))
    .catch(err => res.json(err))

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
app.post('/RentalVehicle',(req,res) =>
{
    RentalVehicle.create(req.body)
    .then(RentVehicle =>res.json(RentVehicle)).catch(err => res.json(err))
})
app.post('/TravelGuideBookingpayment',(req,res) =>
{
    TravelGuideBookingPayment.create(req.body)
    .then(TravelGuideBookingPayment =>res.json(TravelGuideBookingPayment)).catch(err => res.json(err))
})

//Login API
app.get('/Login', cors(), (req,res) => {

})

app.post('/Login', async(req, res) => {
    const{Email} = req.body

    try{
        const check = await collection.findOne({Email:Email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }

    catch(e){
        res.json("notexist")
    }
})

//Register APi
app.post('/register', async(req, res) => {
    const{Email, Password} = req.body

    const data={
        Email:Email,
        Password:Password

    }

    try{
        const check = await collection.findOne({Email:Email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
            await collection.insertMany([data])
        }
    }

    catch(e){
        res.json("not exist")
    }
})





app.listen(3003, ()=>
{
    console.log("Server is Running  on Port 3003")
})