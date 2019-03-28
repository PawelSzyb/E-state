const Listing = require("../models/Listing");
const sequelize = require("sequelize");

exports.postListing = (req, res, next) => {
  const { title, location, bedrooms, garages, bathrooms, sq } = req.body;
  // console.log(title);
  // res.json({ msg: "success", title: title });
  Listing.create({
    title,
    location,
    bedrooms,
    garages,
    bathrooms,
    sq,
    owner: "Kyle Brown"
  })
    .then(result => res.status(200).json(result))
    .catch(error => console.log(error));
};

exports.getLatestListings = (req, res, next) => {
  Listing.findAll({
    order: [["_id", "DESC"]],
    limit: 3
  })
    .then(listings => res.status(200).json(listings))
    .catch(error => console.log(error));
};
