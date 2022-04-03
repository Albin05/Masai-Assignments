const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
    {
        user_pictures : [{type : String, required: true}],
        userId : {type : mongoose.Schema.Types.ObjectId, 
        ref : "user", 
        required: true}
    },
    {
        versionKey : false,
        timestamps : true
    }
);

module.exports = mongoose.model("gallery",gallerySchema);