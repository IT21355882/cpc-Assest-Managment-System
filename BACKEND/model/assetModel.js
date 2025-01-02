const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    EPF:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    Intercom:{
        type:Number,
        required:true,
    },
    Item:{
        type:String,
        required:true,
    },
    Brand:{
        type:String,
        required:true,
    },
    Model:{
        type:String,
        required:true,
    },
    SerialNumber: {
        type: String,
        required: true,
    },    
    AssetNumber:{
        type:String,
        required:true,
    },
    Error:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model(
    "assetModel",
    assetSchema
);