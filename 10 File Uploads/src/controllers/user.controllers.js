const express = require("express");
const router = express.Router();
const fs = require("fs");
const User = require("../models/user.model");
const upload = require("../middlewares/upload");

router.get("", async (req, res) => {
    try{
        const users = await User.find().lean().exec();
        return res.status(200).send({users : users});
    }
    catch(error){
        return res.status(500).send({message : error.message});
    }
});


router.post("",upload.single("profile_pic"), async (req, res) => {
    try{
        const user = await User.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            profile_pic : req.file.path
        });
        return res.status(200).send(user);
    }
    catch(error){
        return res.status(500).send({message : error.message});
    }
});


router.delete("/:id", async (req, res) => {
    try{
        const deleteFile = await User.find({_id: req.params.id});
        const delPath = deleteFile[0].profilePic;
        fs.unlink(delPath, (err) => {
            if (err) throw err;
            console.log("Deleted");
          });
        const user = await User.findByIdAndDelete(req.params.id);
        
         return res.status(200).send(user);
    }
    catch(error){
        return res.status(500).send({message : error.message});
    }
})

module.exports = router;