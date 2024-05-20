
const mongoose = require("mongoose");

const HomePageBooking = new mongoose.Schema(
    {
        noofwayone: String,
        noofwaytwo: String,
        from: String,
        destination: String,
        name: String,
        phone: String,
        email: String,
        date: Date,
        number: Number,
        childrenYes: String,
        childrenNo: String,
        dtime: String,
        rtime: String
    }
);

const HomeBooking = mongoose.model('HomePageBookingFormEntries', HomePageBooking);


module.exports = HomeBooking;