const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Review = require("./Review.js");
const { string } = require('joi');

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    images: [{
        url: String,
        filename: String,
    }], 
    price: Number,
    location: String,
    country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review",
    }],
    owner : {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },       
    category: {
        type: String,
        // enum: [""]
    }                       
});

const Listing = mongoose.model("Listing", listingSchema);

const reSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const Review = mongoose.model("Review", reSchema);

async function main() {
    try {
        await mongoose.connect("mongodb+srv://admin:adminTravelNest@travelnest.rupljq6.mongodb.net/?retryWrites=true&w=majority&appName=TravelNest");
        console.log("Connected to MongoDB");

        // Load sample data
        const data = await Listing.find({});
        
        // Iterate through sample data
        for (const listing of data) {
            try {
                listing.owner = "666191bf6ab33a83aa4548e6";

                // Update listing owner in MongoDB
                await listing.save();

                console.log(`Listing updated: ${listing.title}`);
            } catch (error) {
                console.error(`Error updating listing: ${listing.title}. Skipping...`, error);
                continue;
            }
        }

        console.log("Data updated in MongoDB.");
    } catch (error) {
        console.error("Error:", error);
    } finally {
        mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}

main();
