const cors = require("cors");
const express = require("express");
const songsRoutes = require("./routes/song.route");


const app = express();


app.use(cors({
    origin:["http://music-player-nine-mocha.vercel.app/",
        "https://music-player-nine-mocha.vercel.app/"
    ],
    methods: ["GET","POST","PUT","DELETE"]
}));
app.use(express.json());






app.use("/",songsRoutes)



module.exports = app;