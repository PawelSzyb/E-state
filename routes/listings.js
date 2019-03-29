const express = require("express");

const router = express.Router();

const listingsController = require("../controllers/listings");

// GET /listings/latest
// desc Get 3 latest listings
router.get("/latest", listingsController.getLatestListings);

// GET /listings/:id
// desc Get single listing info
router.get("/:id", listingsController.getSingleListing);

// POST /listings/add
// desc Add new listing
router.post("/add", listingsController.postListing);

module.exports = router;
