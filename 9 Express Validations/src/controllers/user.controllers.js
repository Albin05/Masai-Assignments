const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

const router = express.Router();


router.get("/", async(req,res) => {
    try{
        const users = await User.find().lean().exec();
        return res.status(200).send(users);

    }
    catch(error){
        return res.status(500).send({message: error.message});
    }
});

router.post(
    "/",
    body("first_name")
    .not()
    .isEmpty()
    .withMessage("First Name cannot be empty")
    .isLength({min: 4}),
    body("last_name")
    .not()
    .isEmpty()
    .withMessage("Last Name cannot be empty")
    .isLength({min: 4}),
    body("email")
    .isEmail()
    .custom(async (value) => {
        const user = await User.findOne({ email: value });
  
        if (user) {
          throw new Error("Email is already taken");
        }
        return true;
      }),
    body('pincode')
    .custom((value) => {
        if(value.length != 6)
            throw new Error("pincode should contain 6 characters");
        return true;
    }),
    body('age')
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .isNumeric()
    .withMessage("Age must be a number between 1 and 120")
    .custom((value) => {
        if(value < 1 || value > 100)
            throw new Error("Incorrect age provided");
        return true;
    }),
    body('gender')
    .not()
    .isEmpty
    .withMessage("Gender must be selected")
    .custom((value) => {
        if(!(value == "Male" || value == "Female" || value == "Others"))
            throw new Error("Gender should be Male, Female or Others");
        
            return true;
    }),
    async (req, res) => {
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
        
            const user = await User.create(req.body);
            return res.status(200).send(user);
        }
        catch(error){
            return res.status(500).send({message: error.message});
        } 
      
    },
  );


module.exports = router;