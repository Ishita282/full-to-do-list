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

app.get('/', (req, res) =>{
  res.status(200).send("Welcome to the To-do List App!")
})

app.use("/tasks", taskroute);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
