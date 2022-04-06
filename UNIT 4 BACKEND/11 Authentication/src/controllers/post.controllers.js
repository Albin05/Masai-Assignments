const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const Post = require("../models/post.models");

router.get("",authenticate,async(req,res)=>{
    try {
        req.body.userId=req.user._id;
        const post=await Post.find().lean().exec();
        return res.status(200).send(post);
    } 
    catch (error) {
        return res.status(400).send({message:error.message});
    }   
});

router.get("/:id",authenticate,async(req,res)=>{
    try {
        req.body.userId=req.user._id;
        const post=await Post.findById(req.params.postId).lean().exec();
        return res.status(200).send({post});
    } 
    catch (error) {
        return res.status(400).send({message:error.message});
    }   
});

router.post("",authenticate,async(req,res)=>{
    try {
        req.body.userId=req.user._id;
        const post=await Post.create(req.body);
        return res.status(200).send(post);
    } 
    catch (error) {
        return res.status(400).send({message:error.message});
    }   
});

router.patch("/:id",authenticate, async(req,res)=>{
    try {
        const post=await Post.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.status(200).send(post);
    } 
    catch (error) {
        return res.status(400).send({message:error.message});
        
    }
});

router.delete("/:id",authenticate, async (req,res)=>{
    try {
        const post=await Post.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(post);
    } 
    catch (error) {
        return res.status(400).send({message:error.message});
    }
});
module.exports=router;