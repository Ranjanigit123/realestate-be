// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const MONGO_URL = 
"mongodb+srv://ranjanirithu206:KS0pwc1jwcIxmZu0@cluster0.8mgcr.mongodb.net/MEAN?retryWrites=true&w=majority";


mongoose.connect(MONGO_URL, {

//mongoose.connect("mongodb://localhost:27017/real_estate", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    //.then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});

app.use("/api/properties", propertyRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
