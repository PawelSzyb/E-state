const Sequelize = require("sequelize");

const sequelize = require("../database/database");

const Listing = sequelize.define("listing", {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  garages: {
    type: Sequelize.STRING
  },
  bedrooms: {
    type: Sequelize.STRING
  },
  bathrooms: {
    type: Sequelize.STRING
  },
  sq: {
    type: Sequelize.DOUBLE
  },
  owner: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Listing;
