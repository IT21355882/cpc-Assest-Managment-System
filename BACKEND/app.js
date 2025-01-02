const express = require("express");
const mongoose = require("mongoose");
const router = require("./route/assetRoute");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/asset" ,router);


mongoose.connect("mongodb+srv://chamodyawa:hiruni99@cpc.kr0du.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));
