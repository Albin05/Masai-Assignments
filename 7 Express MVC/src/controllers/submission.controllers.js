const express = require("express");

const router = express.Router();

const Submission = require("../models/submission.models");

router.get("/:id", async (req, res) => {
    try{
        const evaluation = await Submission.find({evaluationId: req.params.id})
        .populate("evaluationId")
        .populate("studentId")
        .lean()
        .exec();

        return res.status(200).send(evaluation);
    }
    catch(error){
        return res.status(500).send({message: error.message});
    }
})

router.get("", async (req, res) => {
    try{
        const highestmarks = await Submission.find().sort({marks: -1}).limit(1).populate("studentId");

        return res.status(200).send(highestmarks);
    }
    catch(error){
        return res.status(500).send({message: error.message});
    }
})

module.exports = router;