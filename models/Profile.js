const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({

   userName:{
        type: String,
        ref: "User"
    },
    
    email:{
        type: String
        ref: "User"
    },
    
    createdAt: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Profile', ProfileSchema);
