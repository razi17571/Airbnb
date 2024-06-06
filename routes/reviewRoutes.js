const express = require('express');
const router = express.Router({ mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require('../controllers/reviewController.js')

// Reviews Post Route ↓
router.post("/:listingId/reviews", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));


// Reviews Delete Route ↓
router.delete("/:listingId/reviews/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;