const mongoose = require("mongoose");
require("dotenv").config(); 

function dbConnection() {
  const DB_URL = process.env.MONGO_URI;

  console.log('Testing MongoDB connection...');

  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
  });

  const db = mongoose.connection;

  db.on("error", (err) => {
    console.error("MongoDB Connection Error:", err);
  });

  db.once("open", function () {
    console.log("Database is connected successfully!");
  });
}

module.exports = dbConnection;