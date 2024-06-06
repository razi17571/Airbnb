const Review = require('../models/Review.js');
const Listing = require('../models/Listings.js');

module.exports = {
    createReview: async (req, res) => {
        try {
            const listing = await Listing.findById(req.params.id);
            const newReview = new Review(req.body.review);
            newReview.author = req.user._id;
            listing.reviews.push(newReview);
            await newReview.save();
            await listing.save();
            req.flash("success", "New review added!");
            res.redirect(`/listings/${listing.id}`);
        } catch (err) {
            console.error(err);
            req.flash("error", "Failed to add new review!");
            res.redirect("back");
        }
    },

    destroyReview: async (req, res) => {
        try {
            const { id, reviewId } = req.params;
            await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
            await Review.findByIdAndDelete(reviewId);
            req.flash("success", "Review deleted!");
            res.redirect(`/listings/${id}`);
        } catch (err) {
            console.error(err);
            req.flash("error", "Failed to delete review!");
            res.redirect("back");
        }
    }
};
