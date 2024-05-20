const mongoose = require('mongoose')

const AuroraBoutique = new mongoose.Schema(
    {
        hotelname: String,
        checkindate: String,
        checkoutdate: String,
        adult: String,
        children: String,
        noofrooms: String
    }
)

const HotelAuroraBoutiqueBooking = mongoose.model('HotelBooking',AuroraBoutique);

module.exports = HotelAuroraBoutiqueBooking;