const { Schema, model } = require("mongoose");

let riderSchema = Schema({
    name: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    drivingLicence: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    nidPic: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    carInfo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    role: {
        type: String,
        enum: ["rider", "learner"],
        default: "rider"
    }

}, { timestamps: true })

module.exports.Rider = model("Rider", riderSchema)