const mongoose = require('mongoose')

const FeedBack = new mongoose.Schema(
    {
        feedback: String,
        feedbackemail: String
    }
)

const FooterBooking = mongoose.model('FeedBacks',FeedBack);

module.exports = FooterBooking;