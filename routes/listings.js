const express = require("express");
const { check } = require("express-validator/check");

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
router.post(
  "/add",
  check("title")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Title field is required"),
  check("location")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Location field is required"),
  check("realtor")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Realtor field is required"),
  check("price")
    .not()
    .isEmpty()
    .isFloat({ min: 1 })
    .withMessage("Price is invalid"),
  check("garages")
    .isInt()
    .withMessage("Enter valid number"),
  check("bedrooms")
    .isInt()
    .withMessage("Enter valid number"),
  check("bathrooms")
    .isInt()
    .withMessage("Enter valid number"),
  check("sq")
    .not()
    .isEmpty()
    .isFloat({ min: 1 })
    .withMessage("Enter valid number"),
  check("lotSize")
    .not()
    .isEmpty()
    .isFloat({ min: 1 })
    .withMessage("Enter valid  number"),
  listingsController.postListing
);

module.exports = router;
