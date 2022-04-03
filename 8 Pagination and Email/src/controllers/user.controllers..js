const path = require("path");
const express = require('express');
const router = express.Router();
const transporter = require('../configs/mail');
const User = require('../models/user.model');

router.get('', async (req, res) => {
    try{
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 20;


        const skip = (page - 1) * pagesize;
        
        const users = await User.find().skip(skip).limit(pagesize).lean().exec();
        return res.status(200).send(users);
    }
    catch(err)
    {
        return res.status(500).send(err.message);
    }
});


router.post('', async(req,res) => {
    try
    {
        const user = await User.create(req.body);
   
        transporter.sendMail({
            from: '"ABC System" <abc@example.com>', 
            to: user.email,
            subject: `Welcome to ABC system ${user.first_name} ${user.last_name}  `,
            text: `Hi, ${user.first_name} Please confirm your email address.`,
            html: `Hi, ${user.first_name} Please confirm your email address.`,
          });


          transporter.sendMail({
            from: '"ABC System" <abc@example.com>',
            to: "admin@example.com, admin_1@example.com, admin_2@example.com, admin_3@example.com, admin_4@example.com",
            subject: `${user.first_name} ${user.last_name} has registered with us  `,
            text: `Please welcome, ${user.first_name} ${user.last_name}`,
            html: `Please welcome, ${user.first_name} ${user.last_name}`,
          });

        return res.status(201).send(user);
    }
    catch(err)
    {
       return res.status(500).send(err.message);
    }
})

module.exports = router;

