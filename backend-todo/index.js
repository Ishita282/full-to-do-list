const express = require("express");
const taskroute = require("./route/taskroute");
const dbConnection = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

dbConnection();

const app = express();

console.log("Mongo URI:", process.env.MONGO_URI);

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});


app.use("/tasks", taskroute);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
