const express = require("express");
const bodyParser = require("body-parser");

const listingsRoutes = require("./routes/listings");

const app = express();
const sequelize = require("./database/database");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PUT, PATCH"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type",
    "Authorization"
  );
  next();
});
app.use("/listings", listingsRoutes);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const data = error.data || {};

  res.status(statusCode).json(data);
});

const port = process.env.PORT || 5000;

sequelize
  .sync()
  .then(result => {
    app.listen(5000, () => `Server started at ${port}`);
  })
  .catch(err => console.log(err));
