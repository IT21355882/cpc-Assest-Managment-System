const express = require("express");
const router = express.Router();
//insert model
const Asset = require("../model/assetModel");
//insert user controller
const AssetController = require("../controler/assetControll");

router.get("/",AssetController.getAllasset);
router.post("/addAsset",AssetController.addAsset);
router.get("/:id",AssetController.getbyId);
router.put("/:id",AssetController.updateDetails);
router.delete("/:id",AssetController.deleteAsset);

//export
module.exports = router;