
const mongoose = require("mongoose");

const HotelBooking = new mongoose.Schema(
    {
        entername: String,
        entercheckindate: String,
        entercheckoutdate: String,
        adult: String,
        children: String,
        enternoofrooms: String,
        enternoofpeople: String,
        enterphoneoremail: String,
        roomtype: String,
        checkboxforwork: String
    }
);

const HotelBookingForm = mongoose.model('HotelBookingFormEntries', HotelBooking);


module.exports = HotelBookingForm;