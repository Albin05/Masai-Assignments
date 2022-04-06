const express = require("express");
const router = express.Router();
const upload = require("..middlewares/upload");
const fs = require("fs");
const Gallery = require("../models/gallery.model");


router.get("/", async (req, res) => {
    try{
        const galleryimages = await Gallery.find()
        .populate("userId")
        .lean().exec();
        return res.status(200).send(galleryimages);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
})


router.post("/", upload.array("gallery_images",5), async (req,res) => {
    try{
        const filePath = req.files.map((file) => {
            return file.path
        });

        const galleryimages = await Gallery.create({
            userId : req.body.userId,
            gallery_images : filePath
        });

        return res.status(200).send(galleryimages);
    }
    catch(error){
        return res.status(500).send({message: error.message});
    }
});


module.exports = router;