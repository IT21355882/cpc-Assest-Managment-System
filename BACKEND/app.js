const express = require("express");
const mongoose = require("mongoose");
const assetRouter = require("./route/assetRoute");
const userRouter = require("./route/userRoute");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/asset" , assetRouter);
app.use("/user", userRouter)


mongoose.connect("mongodb+srv://chamodyawa:hiruni99@cpc.kr0du.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));
