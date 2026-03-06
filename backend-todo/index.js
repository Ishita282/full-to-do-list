const express = require("express");
const taskroute = require("./route/taskroute");
const dbConnection = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

dbConnection();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome...",
  });
});

app.use("/tasks", taskroute);

const PORT = process.env.PORT || 8081;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
