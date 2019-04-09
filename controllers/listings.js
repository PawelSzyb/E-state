const Listing = require("../models/Listing");
const { validationResult } = require("express-validator/check");

exports.postListing = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorArr = errors.mapped();
    const error = new Error("Validation failed. Data incorrect");
    error.statusCode = 422;
    error.data = errorArr;
    throw error;
  }
  const {
    title,
    location,
    price,
    bedrooms,
    garages,
    bathrooms,
    sq,
    realtor,
    lotSize
  } = req.body;
  Listing.create({
    title,
    location,
    price,
    bedrooms,
    garages,
    bathrooms,
    sq,
    realtor,
    lotSize
  })
    .then(result => res.status(200).json(result))
    .catch(error => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.getLatestListings = (req, res, next) => {
  Listing.findAll({
    order: [["_id", "DESC"]],
    limit: 3
  })
    .then(listings => res.status(200).json(listings))
    .catch(error => console.log(error));
};

exports.getSingleListing = (req, res, next) => {
  const listingId = req.params.id;
  Listing.findByPk(listingId)
    .then(listing => {
      res.status(200).json(listing);
    })
    .then(error => console.log(error));
};
