const mongoose = require("mongoose");

const db = {
  config: () => {
    mongoose
      .connect("mongodb+srv://faizan027915:faizan027915@mern.jsr5rzh.mongodb.net/?retryWrites=true&w=majority")
      .then(() => console.log("Connected to the database..."))
      .catch((err) => console.log("Failed to connect to the database: " + err.message));
  },
};

module.exports = db;
