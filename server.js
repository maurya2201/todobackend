const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const dbConnect = require("./config/db");
dbConnect();
const morgan = require("morgan");
const router = require('./route/route');
const cors = require("cors");
app.use(cors())

app.use(morgan("dev"));
app.use(express.json());

app.use('/api/todo/',router);

app.listen(process.env.PORT, () => {
  console.log(`app running on ${process.env.PORT}`);
});
