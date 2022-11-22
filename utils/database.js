const mongoose = require("mongoose");
const dbConfig = require("../config/dbConfig");
module.exports = createDatabaseConnection = async () => {
  await mongoose
    .connect(dbConfig.url)
    .then((data) => {
      console.log("Connected to the database!");
    })
    .catch((error) => {
      console.log("Error Connecting to the database!");
    });
};
