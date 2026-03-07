const express = require("express");
const taskroute = require("./route/taskroute");
const dbConnection = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "https://full-to-do-list.vercel.app" // remove trailing slash
}));

// Routes
app.get('/', (req, res) => {
  res.status(200).send("Welcome to the To-do List App!");
});
app.use("/tasks", taskroute);

const PORT = process.env.PORT || 8081;

dbConnection()
  .then(() => {
    console.log("Database connected ✅");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
  });