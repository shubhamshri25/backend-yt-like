const mongoose = require("mongoose");
const DB_NAME = require("./constant");

mongoose
  .connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MOngoDB connection error", err));

const db = mongoose.connection;

module.exports = db;
