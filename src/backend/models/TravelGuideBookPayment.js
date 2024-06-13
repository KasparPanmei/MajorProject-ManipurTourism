const mongoose = require('mongoose')

const TravelGuideBooking = new mongoose.Schema(
    {
        yourname: String,
        emailorphoneno: String,
        whereto: String,
        people: String,
        service: String,
        tour: String
    }
)

const TravelGuideBookingpayment = mongoose.model('TravelGuideBookingPayment',TravelGuideBooking);

module.exports = TravelGuideBookingpayment;