const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require("../models/listing.js");
require('dotenv').config();

main()
 .then(() => {
    console.log('Successfully Connected Mongoose');
 })
 .catch((err) => {
    console.log(err);
 })

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6532b482a4e7bbebc8c4a9aa",
        geometry: { type: "Point", coordinates: [0, 0] } // Add this line
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized ...");
};

initDB();