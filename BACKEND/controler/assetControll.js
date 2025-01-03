const Asset = require("../model/assetModel");

const getAllasset = async (req, res, next) => {
    let Assets;
//get all users
    try{
        asset = await Asset.find();
    }catch (err) {
        console.log(err);
    }
    //not found
    if(!asset){
        return res.status(404).json({message:"User not found"});
    }
    //display
    return res.status(200).json({asset});
};

//data insert
const addAsset = async (req, res, next) => {
    const {name, EPF, location, Intercom, Item, Brand, Model, SerialNumber, AssetNumber, Error} = req.body;

    let asset;  // Changed from 'assets' to 'asset'

    try {
        // Use the correct model name 'Asset' (assuming 'Asset' is the model name)
        asset = new Asset({name, EPF, location, Intercom, Item, Brand, Model, SerialNumber, AssetNumber, Error});
        await asset.save();
    } catch (err) {
        console.log(err);
    }

    // Return error if asset creation failed
    if (!asset) {
        return res.status(404).json({message: "Unable to add asset"});
    }

    return res.status(200).json({asset});
};

//get by id
const getbyId = async (req, res, next) => {
    const epf = req.params.id;

    let asset;

    try {
        asset = await Asset.findOne({ EPF: epf });
    }catch (err) {
        console.log(err);
    }

    if (!asset) {
        return res.status(404).json({message: "Not found"});
    }

    return res.status(200).json({asset});
};

//update details
const updateDetails = async (req, res, next) => {
    const id = req.params.id;
    const {name, EPF, location, Intercom, Item, Brand, Model, SerialNumber, AssetNumber, Error} = req.body;

    let asset;
    try {
        asset = await Asset.findByIdAndUpdate(id,
            {name: name, EPF:EPF, location:location, Intercom:Intercom, Item:Item, Brand:Brand, Model:Model, SerialNumber:SerialNumber, AssetNumber:AssetNumber, Error:Error});
            asset = await asset.save();
    }catch(err) {
        console.log(err);
    }
    if (!asset) {
        return res.status(404).json({message: "unable to update"});
    }

    return res.status(200).json({asset});
};

//delete details
const deleteAsset = async (req, res, next) => {
    const id = req.params.id;

    let asset;

    try {
        asset = await Asset.findByIdAndDelete(id)
    }catch (err) {
        console.log(err);
    }
    if (!asset) {
        return res.status(404).json({message: "unable to delete"});
    }

    return res.status(200).json({asset});
}



exports.getAllasset = getAllasset;
exports.addAsset = addAsset;
exports.getbyId = getbyId;
exports.updateDetails = updateDetails;
exports.deleteAsset = deleteAsset;