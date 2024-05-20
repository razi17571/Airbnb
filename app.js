const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1); // Exit process with failure
    }
})();


app.get("/", (req, res) => {
    res.send("Root is working");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})