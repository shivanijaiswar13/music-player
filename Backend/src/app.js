
const express = require("express");
const songsRoutes = require("../src/routes/song.route");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());


app.use("/",songsRoutes)


module.exports = app;