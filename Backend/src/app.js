const cors = require("cors");
const express = require("express");
const songsRoutes = require("./routes/song.route");


const app = express();


app.use(cors());
app.use(express.json());






app.use("/",songsRoutes)



module.exports = app;