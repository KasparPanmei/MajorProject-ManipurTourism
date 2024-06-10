
const mongoose = require("mongoose");

const RentVehicleSchema = new mongoose.Schema(
    {
        pickuplocation: String,
        destination: String,
        way: String,
        vehicle: String,
        pickup: String,
        time: String
    }
);

const RentalVehicle = mongoose.model('RentVehicle', RentVehicleSchema);


module.exports = RentalVehicle;