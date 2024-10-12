// Property.js

const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    contact: String,
    price: Number,
    area: Number,
    reviews: [
        {
            user: String,
            rating: Number,
            comment: String,
        },
    ],
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
