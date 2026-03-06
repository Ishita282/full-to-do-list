const mongoose = require("mongoose");

function dbConnection() {
  const DB_URL = process.env.MONGO_URI;

  mongoose.connect(DB_URL)
    .then(() => console.log("Database is connected successfully!"))
    .catch((err) => console.error("Connection Error:", err));

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
}

module.exports = dbConnection;