const mongoose = require('mongoose')

const TravelGuide = new mongoose.Schema(
    {
        yourname: String,
        emailorphoneno: String,
        whereto: String,
        people: String,
        service: String,
        tour: String
    }
)

const TravelAndGuide = mongoose.model('TravelsandGuide',TravelGuide);

module.exports = TravelAndGuide;